import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { ResetButton, SendButton, ButtonsDiv, DeleteImg, Error } from './styles';
import { defaultProduct, formatNumber, categorias } from './helper'
import { FormContainer } from '../../components/form-container/styles'
import axios from 'axios';
import Swal from 'sweetalert2'
import jwtDecode from 'jwt-decode';
import { Product, TokenDecoded, Session, Data } from './types';
import { useSelector } from 'react-redux'

const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [estado, setEstado] = useState('selecione');
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultProduct
  });
  const history = useHistory();
  const token = useSelector((state: Session) => state.session.token)
  const userId: number = ~~(jwtDecode<TokenDecoded>(token).sub, 10)

  useEffect (()=>{
      if (token.length < 1) history.push('/');
  },[token, history])

  useEffect(()=>{
    let es;
    switch(formValue.usability){
      case '1':
        es = 'não funciona / quebrado / necessita reforma';
        break;
      case '2':
        es = 'usado, danificado, mas ainda útil ';
        break;
      case '3':
        es = 'bastante usado, mas ok';
        break;
      case '4':
        es = 'algumas marcas de uso';
        break;
      case '5':
        es = 'como novo';
        break;
      default:
        es = 'selecione';
        break;
    };
    setEstado(es);
  },[formValue.usability])  

  if (JSON.stringify(errors) !== '{}') console.log(errors)

  const onSubmit = (data: Data)=> {
    console.log(data)
    const {usability, value, name, description, category} = data;
    const sendData: Product = {
      userId,
      views: 0,
      usersAccess: 0,
      boost: "",
      usability,
      value,
      name,
      description,
      category,
      images: formValue.images,
      thumbnail: formValue.images[0],
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(sendData);
    axios
      .post('https://capstone-q2.herokuapp.com/products', sendData, headers)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Produto cadastrado.',
        });
        reset(defaultProduct);
        setFormValue(defaultProduct);
      })
      .catch(({ response }) => {
        if (!!response) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Não foi possível enviar os dados.',
          });
          console.log(response); 
            reset(defaultProduct);
            setFormValue(defaultProduct);
        };
      });
  };

  return (
    <FormContainer  style={{ marginTop: 80 }}>
      <h1>Novo Produto</h1>
      <Link to="/">
        <h3> Voltar </h3>
      </Link>
      <Form onSubmit={handleSubmit(onSubmit)} >

        <Form.Field required>
            <label htmlFor='name'>Produto</label>
            <input
            type='text'
            name="name"
            id="name"
            placeholder="Nome do Produto"
            ref={register({
                required: 'Nome necessário!',
            })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
        </Form.Field>

        <Form.Field required>
          <label htmlFor='category'>
            Categoria
          </label>
          <select
            defaultValue='Outros'
            name="category"
            id="category"
            ref={register}
            placeholder="Escolha uma categoria"
            >
            {categorias.map(({ key, value, text }) => (
              <option key={key} value={value}>
                {text}
              </option>
            ))}
          </select>

        </Form.Field>

        <Form.Field required>
          <label htmlFor='images'>Imagens</label>
          <input
            type="file"
            name="images"
            id="images"
            accept="image/x-png,image/gif,image/jpeg"
            placeholder="Inserir imagem"
            multiple
            // ref={register({
            //   required: 'Insira ao menos uma imagem!',
            // })}
            onChange={({target}): void => setFormValue({
                ...formValue,
                images: [...formValue.images, target.value]
            })}
          />
          {errors.images && <Error>{errors.images.message}</Error>}
          {formValue?.images?.map((img: any, idx: number) => (
          <div key={idx} style={{display: 'flex'}}>
            <p>{img}&nbsp;
              <DeleteImg
                onClick={  (): void => setFormValue({
                  ...formValue, images: formValue.images.filter((_: any, i: number) => i !== idx)
                })  }
              >x</DeleteImg>
            </p>
          </div>
        ))}
        </Form.Field>

        <Form.Field >
            <label htmlFor='usability'>Estado de conservação</label>
            <input
            name="usability"
            id="usability"
            type="range"
            min={1}
            max={5}
            ref={register}
            onChange={({target}): void => {setFormValue({...formValue, usability: target.value})}}				
        />
        <div>{estado}</div>
        </Form.Field>

        <Form.Field required>
          <label htmlFor='description'>Detalhes</label>
          <textarea
            name="description"
            id="description"
            rows={4}
            ref={register({
                required: 'Descreva seu produto.',
            })}
            placeholder="Detalhes como possíveis sinais de uso, &#10;
              manchas, partes faltantes ou estragadas, para que os &#10;
              visitantes saibam o que esperar do seu produto."
          />
            {errors.description && <Error>{errors.description.message}</Error>}
        </Form.Field>

        <Form.Field required>
          <label htmlFor='value'>Valor de referência para Skambo</label>
          <input
            type="tel"
            name="value"
            id="value"
            placeholder='1,00'
            maxLength={11}
            ref={register({
                required: 'Informe o valor',
                validate: {
                  bigger: (value: string): boolean | string => parseInt(value.replace(/\D/g, ''), 10) > 100 || 'Valor mínimo: R$ 1,00',
                }
            }            )}
            onChange={
              ({ target }): void => setFormValue({
                ...formValue, value: formatNumber(target.value)
              })
            }
            value={formValue.value}
          />
          {errors.value && <Error>{errors.value.message}</Error>}
        </Form.Field>

        <Form.Field>
            <label htmlFor='interests'>Interesses <em style={{color: 'grey'}}>opcional</em></label>
            <input
            type='text'
            id='interests'
            name='interests'
            placeholder='Interesses para troca, separados por vírgula'
            ref={register}
            />
        </Form.Field>

        <Form.Field>
          <ButtonsDiv>
            <ResetButton type="reset" onClick={(): void => {
              reset();
              setFormValue(defaultProduct)}}
            >
                Limpar
            </ResetButton>
            <SendButton>Cadastrar</SendButton>
          </ButtonsDiv>
        </Form.Field>
      </Form>
    </FormContainer>
  );
}

export default NewProduct;
