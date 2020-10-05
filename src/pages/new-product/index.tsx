import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import { Container, ResetButton, SendButton, ButtonsDiv, Money } from './styles';
// import { useDispatch } from 'react-redux';
import { product, token_decoded, categoria } from './types';

const token: string = localStorage.token
  ? localStorage.token
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhdG9AYXRhdWEuY29tIiwiaWF0IjoxNjAxNTgxNTg2LCJleHAiOjE2MDE1ODUxODYsInN1YiI6IjQifQ.OtwmlcIxnV5vY6JGSkPzMIrIfLz5odwoyRJWB6yGScs';

const defaultProduct: product = {
  user_id: jwt_decode<token_decoded>(token),
  views: 0,
  usersAccess: 0,
  condition: '5',
  val: '0.00',
  boost: '',
  name: '',
  description: '',
  thumbnail: null,
  category: 'Outros',
  images: [],
  interests: [],
};

const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [formError, setFormError] = useState({});
  const [requestError, setRequestError] = useState('');
  // const dispatch = useDispatch<any>();

  useEffect(() => {
    if (requestError !== '') console.log(JSON.stringify(requestError));
  }, [requestError]);

  const onSubmit = () => {
    const sendData = {
      header: {
        Authorization: token,
      },
      data: formValue,
    };
    console.log(JSON.stringify(sendData));
    // axios
    //   .post('https://capstone-q2.herokuapp.com/products', sendData)
    //   .then(({ data }) => {
    //     console.log(data);

    //     // mostra mensagem de sucesso
    //     // limpa formulário
    //   })
    //   .catch(({ response }) => {
    //     setRequestError(response);
    //   });
  };

  function formatNumber(n: string) {
    return n
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d{2})/, '$1.$2'); // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    // .replace(/(\d{3})(\d)/, "$1.$2")
    // .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    // .replace(/(-\d{2})\d+?$/, "$1")
    // return n.replace(/\D/g, '').replace(/\d{2}(?!\B)/, (str) => {
    //   return `,${str}`;
    // });
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
    <Container>
      <Link to="/">
        <h3> Voltar </h3>
      </Link>

      <Form onSubmit={() => onSubmit()}>
        <Form.Field>
          <label htmlFor="name">
            <div>Produto</div>
          </label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={({ target }) => setFormValue({ ...formValue, name: target.value })}
            required
          />
        </Form.Field>

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

        <Form.Field>
          <label htmlFor="file">
            <div>Imagens</div>
          </label>
          <input
            type="file"
            name="file"
            placeholder="Inserir imagem"
            required
            multiple
            onChange={({ target }) =>
              setFormValue({
                ...formValue,
                images: [...formValue.images, target.value],
                thumbnail: formValue.images[0],
              })
            }
          />
          {formValue.images.map((img) => (
            <p>{img}</p>
          ))}
        </Form.Field>

        <Form.Field>
          <label htmlFor="condition">
            <div>Estado de conservação</div>
          </label>
          <input
            name="condition"
            type="range"
            min={0}
            max={10}
            value={formValue.condition}
            onChange={({ target }) => setFormValue({ ...formValue, condition: target.value })}
          />
          <span>{formValue.condition}</span>
        </Form.Field>

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
            step="0.10"
            min="1.00"
            required
            onChange={({ target }) => setFormValue({ ...formValue, val: target.value })}
            value={formatNumber(formValue.val)}
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
    </Container>
  );
};

export default NewProduct;
