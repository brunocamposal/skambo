import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import { useForm } from 'react-hook-form';

import FormField from '../../components/form-field';
import FormContainer from '../../components/form-container';
import { Form } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { Form, Message, Rating } from 'semantic-ui-react';
import { ResetButton, SendButton, ButtonsDiv, Money } from './styles';
// import { useDispatch } from 'react-redux';
import { product, token_decoded, categoria } from './types';
import prettyMoney from "pretty-money"

const token: string = localStorage.token || eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjAyMTEzNTQ2LCJleHAiOjE2MDIxMTcxNDYsInN1YiI6IjcifQ.NZcudJxZP4f4fPmRFNMyDPcLgIo_no3xt7SRB7QAaZ8;

  const defaultProduct: product = {
  userId: jwt_decode<token_decoded>(token).sub,
  views: 0,
  usersAccess: 0,
  usability: "3",
  value: "100",
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
  const { register, handleSubmit, setValue, errors } = useForm<IFormInputs>();

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
    setValue(es);
  },[formValue.usability])  

  const onSubmit = (values: IFormInputs) => {
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
        if (!!err) setRequestError(err);
      });
  };

  const formatNumber = (n: string) => {
    return prettyMoney({ 
      currency: "R$",
      position: "before",
      decimals: "fixed",
      decimalDelimiter: ",",
      thousandsDelimiter: "."
    }, n); 
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
    { key: 12, value: 'Outros', text: 'Outros' },
  ];

  return (
    <FormContainer props={
    	<>
      <Link to="/">
        <h3> Voltar </h3>
      </Link>

      <Form onSubmit={handleSubmit(onSubmit)} >
        <FormField
					required
					name="name"
					label="Produto"
					inputPlace="Nome do Produto"
					inputRef={register({
						required: 'Nome necessário!',
					})}
					error={errors.email}
				/>

        <Form.Field>
          <label htmlFor="category">
            <div>Categoria</div>
          </label>
          <select
            required
            name="category"
            placeholder="Escolha uma categoria"
            value={formValue.category}
            onChange={({ target }) => setFormValue({ ...formValue, category: target.value })}>
            {categorias.map(({ key, value, text }) => (
              <option key={key} value={value}>
                {text}
              </option>
            ))}
          </select>
        </Form.Field>

        <FormField
          label="Imagens"
            type="file"
            name="file"
            inputPlace="Inserir imagem"
            required
						multiple
						inputRef={register()}
          />
          {//apresentar as imagens}
        
				<FormField
					label="Estado de conservação"
					name="usability"
					type="range"
					min={1}
					max={5}
					inputRef={register()}						
				/>
				<div>{estado}</div>

        <Form.Field>
          <label htmlFor="description">
            <div>Detalhes</div>
          </label>
          <textarea
            name="description"
            rows={4}
            required
            placeholder="Detalhes como possíveis sinais de uso, &#10;
              manchas, partes faltantes ou estragadas, para que os &#10;
              visitantes saibam o que esperar do seu produto."
            onChange={({ target }) => setFormValue({ ...formValue, description: target.value })}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="val">
            <div>Valor de referência para Skambo</div>
          </label>
          <Money
            type="number"
            name="val"
            min="1.00"
            required
            onChange={({ target }) => setFormValue({ ...formValue, value: formatNumber(target.value) })}
            value={formValue.value}
          />
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
		} />
	);
}

export default NewProduct1;

