import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { ResetButton, SendButton, ButtonsDiv, DeleteImg, Error } from './styles';
import {defaultProduct, formatNumber, categorias} from './helper'
import {FormContainer} from '../../components/form-container/styles'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Product, TokenDecoded } from './types';
import {useSelector} from 'react-redux'

const onSubmit = (formValue: Product, values): void => {
  console.log('values.target:', values.target, 'formValue:', formValue)
  const newProduct = {
    userId: jwtDecode<TokenDecoded>(token).sub,
    views: 0,
    usersAccess: 0,
    boost: "",
    usability: values.usability,
    value: values.value,
    name: values.name,
    description: values.description,
    category: values.category,
    images: formValue.images,
    thumbnail: formValue.images?[0] : '',
    interests: typeof values.interests === 'string' ? values.interests.split(',').map(val => val.trim()) : values.interests ,
  }
  const sendData = {
    header: {
      Authorization: token,
    },
    data: newProduct,
  };
  console.log(sendData);
  // axios
  //   .post('https://capstone-q2.herokuapp.com/products', sendData)
  //   .then(({ data }) => {
  //     console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Produto cadastrado.',
      });
  //   })
  //   .catch(({ err }) => {
  //     if (!!err) {
  //       console.log(err);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Erro',
  //         text: 'Não foi possível enviar os dados.',
  //       });
  //     };
  //   });
};
const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [estado, setEstado] = useState('selecione');
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultProduct
  });

  const token: string = useSelector(state => state.token);
  if (token === '') history.push('/login');

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

  !!errors?.entries?.length && console.log(errors)

return (
        <FormContainer>
      <Link to="/" style={{ marginTop: 100 }}>
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
            ref={register({
                required: 'Insira ao menos uma imagem!',
            })}
            onChange={({target}): void => setFormValue({
                ...formValue,
                images: [...formValue.images, JSON.stringify(target.value)]
            })}
          />
            {errors.images && <Error>{errors.images.message}</Error>}
        {formValue?.images?.map((img, idx) => (
          <div key={idx} style={{display: 'flex'}}>
            <p>{img}&nbsp;
              <DeleteImg
                onClick={  (): void => setFormValue({
                  ...formValue, images: formValue.images.filter((_, i) => i !== idx)
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
                // validate: {
                //     minimo: (value): string | boolean => parseInt(value.replace(/\D/g, '')) < 100 || 'Valor mínimo: 1,00',
                // },
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
