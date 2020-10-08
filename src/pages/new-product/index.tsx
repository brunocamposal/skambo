import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { ResetButton, SendButton, ButtonsDiv, Money } from './styles';
import { product, token_decoded, categoria } from './types';

const token: string = localStorage.token || eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjAyMTEzNTQ2LCJleHAiOjE2MDIxMTcxNDYsInN1YiI6IjcifQ.NZcudJxZP4f4fPmRFNMyDPcLgIo_no3xt7SRB7QAaZ8;

const defaultProduct: product = {
  userId: jwt_decode<token_decoded>(token).sub,
  views: 0,
  usersAccess: 0,
  usability: "3",
  value: 0,
  boost: "",
  name: "",
  description: "",
  thumbnail: null,
  category: "Outros",
  images: [],
  interests: [],
};

const NewProduct1: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [requestError, setRequestError] = useState();
  const [estado, setEstado] = useState('selecione');
  const { register, handleSubmit, errors } = useForm<IFormInputs>(defaultProduct);

  useEffect(() => {
    if (!!requestError) console.log(JSON.stringify(requestError));
  }, [requestError]);

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

  const onSubmit = (values: IFormInputs) => {
    // values.thumbnail = values.images[0];
    const sendData = {
      header: {
        Authorization: token,
      },
      data: values,
    };
    console.log(JSON.stringify(sendData));
    axios
      .post('https://capstone-q2.herokuapp.com/products', sendData)
      .then(({ res }) => {
        console.log(res);

    //     // mostra mensagem de sucesso
    //     // limpa formulário
      })
      .catch(({ err }) => {
          !!err && console.log(err)
        if (!!err) setRequestError(err);
      });
  };

  const formatNumber = (n: string) => {
    return n
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(0)(.{?})(\d{?})$/gm, "$3")
    .replace(/(\d{1,})(\d{2})$/gm, "$1,$2")
    .replace(/(\d{1,})(\d{3}),/g, "$1.$2,")
    .replace(/(\d{1,})(\d{3})\./g, "$1.$2.")
  }

  const categorias: categoria[] = [
    { key: 1, value: 'Eletronicos', text: 'Eletrônicos' },
    { key: 2, value: 'Escritorio', text: 'Escritório' },
    { key: 3, value: 'Esportes', text: 'Esportes' },
    { key: 4, value: 'Instrumentos_Musicais', text: 'Instrumentos Musicais' },
    { key: 5, value: 'Jogos', text: 'Jogos' },
    { key: 6, value: 'Lazer', text: 'Lazer' },
    { key: 7, value: 'Livros', text: 'Livros' },
    { key: 8, value: 'Moveis', text: 'Móveis' },
    { key: 9, value: 'Saude', text: 'Saúde' },
    { key: 10, value: 'Servicos', text: 'Serviços' },
    { key: 11, value: 'Vestuario', text: 'Vestuário' },
    { key: 12, value: 'Outros', text: 'Outros', selected: 'selected' },
  ];
console.log(errors)
  return (
        <>
      <Link to="/">
        <h3> Voltar </h3>
      </Link>

      <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '60px'}}>
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
            {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
        </Form.Field>

        <Form.Field required>
          <label htmlFor='category'>
            Categoria
          </label>
          <select
            name="category"
            id="category"
            ref={register}
            placeholder="Escolha uma categoria"
            >
            {categorias.map(({ key, value, text, selected }) => (
              <option key={key} value={value} selected={selected || false}>
                {text}
              </option>
            ))}
          </select>

        </Form.Field>

        <Form.Field required>
          <label htmlFor='file'>Imagens</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Inserir imagem"
            multiple
            ref={register({
                required: 'Insira ao menos uma imagem!',
            })}
          />
            {errors.file && <p style={{color: 'red'}}>{errors.file.message}</p>}
        </Form.Field>

        <Form.Field >
            <label htmlFor='usability'>Estado de conservação"</label>
            <input
            name="usability"
            id="usability"
            type="range"
            min={1}
            max={5}
            ref={register}
            onChange={({target}): any=>{setFormValue({...formValue, usability: target.value})}}				
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
            {errors.description && <p style={{color: 'red'}}>{errors.description.message}</p>}
        </Form.Field>

        <Form.Field required>
          <label htmlFor='value'>Valor de referência para Skambo</label>
          <Money
            type="tel"
            name="value"
            id="value"
            maxLength={11}
            min={1.00}
            ref={register({
                required: 'Informe o valor',
                validate: {
                    minimo: value => value < 1.00 || 'Valor mínimo: 1,00'
                }
            }            )}
            onChange={({ target }) => setFormValue({ ...formValue, value: formatNumber(target.value) })}
            value={formValue.value}
          />
          {errors.value && <p style={{color: 'red'}}>{errors.value.message}</p>}
        </Form.Field>

        <Form.Field>
          <ButtonsDiv>
            <ResetButton type="reset" onClick={() => setFormValue(defaultProduct)}>
              Limpar
            </ResetButton>
            <SendButton>Cadastrar</SendButton>
          </ButtonsDiv>
        </Form.Field>
			</Form>
        </>
        // } />
	);
}

export default NewProduct1;

