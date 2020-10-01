import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

interface product {
  user_id: number;
  views: number;
  usersAcess: number;
  usability: number;
  value: number;
  boost: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  images: string[];
  interests: string[];
}

interface token_decoded {
  user_id: number;
  exp: Date;
}

const token: string = localStorage.token
  ? localStorage.token
  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhdG9AYXRhdWEuY29tIiwiaWF0IjoxNjAxNTgxNTg2LCJleHAiOjE2MDE1ODUxODYsInN1YiI6IjQifQ.OtwmlcIxnV5vY6JGSkPzMIrIfLz5odwoyRJWB6yGScs"
  ;

const { user_id } = jwt_decode<token_decoded>(token);

const defaultProduct: product = {
  user_id: user_id,
  views: 0,
  usersAcess: 0,
  usability: 0,
  value: 0,
  boost: '',
  name: '',
  description: '',
  thumbnail: '',
  category: '',
  images: [''],
  interests: [''],
};

const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const { register, handleSubmit, errors } = useForm<product>(defaultProduct);
  const [requestError, setRequestError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!errors.length) console.log(errors);
    if (!!requestError !== '') console.log(requestError);
  }, [errors, requestError]);

  const onSubmit = () => {
    const data = {
      header: {
        Authorization: token
      },
      data: {
        user: {
          user_id: user_id,
        },
        product: formValue
      }
    }
    axios.post("https://capstone-q2.herokuapp.com/products", data).then({ data } => {
  console.log(data)
}).catch({response}=> {
  setRequestError(response)
    })
  };

  interface categorias {
    key: number;
    value: string;
    text: string;
  }

  const categorias: categorias[] = [
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
    <>
      <Container>
        <Link to="/">
          <h3> Voltar </h3>
        </Link>
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label>
                  <div>Produto</div>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValue.name}
                  onChange={(e) => {
                    setFormValue({ ...formValue, name: e.target.value });
                  }}
                  // ref={register({
                  //   required: true,
                  //   maxLength: 30,
                  //   message: 'Insira um nome para seu produto',
                  // })}
                />
              </Form.Field>
              <Form.Field>
                <label>
                  <div>Imagens</div>
                  <input
                    type="file"
                    name="file"
                    // ref={register({
                    //   required: true,
                    //   message: 'Insira ao menos uma imagem',
                    // })}
                    multiple
                  />
                </label>
              </Form.Field>
              <Form.Field>
                <label>
                  <div>Categoria</div>
                  <select
                    name="category"
                    // ref={register({
                    //   required: true,
                    //   message: 'Selecione uma categoria',
                    // })}
                    onChange={(g) => {
                      setFormValue({ ...formValue, category: g.target.value });
                      console.log(g.target);
                    }}>
                    {categorias.map(({ key, value, text }) => (
                      <option value={value} key={key}>
                        {text}
                      </option>
                    ))}
                  </select>
                </label>
              </Form.Field>
              <Form.Field>
                <label>
                  <div>Estado de conservação</div>
                  <input
                    onChange={(f) => {
                      setFormValue({ ...formValue, usability: parseInt(f.target.value) });
                    }}
                    type="range"
                    name="aspect"
                    id="aspect"
                    // ref={register}
                  />
                </label>
              </Form.Field>
              <Form.Field>
                <label>
                  <div>Detalhes</div>
                  <TextArea
                    rows={4}
                    name="description"
                    // ref={register({
                    //   required: true,
                    //   minLength: 18,
                    //   message: 'Preste algumas informações sibre seu produto',
                    // })}
                    placeholder="Informe sobre possíveis sinais de uso como &#10;
          manchas, partes faltantes / estragadas, etc, para que os &#10;
          visitantes saibam exatamente o que esperar do seu produto."
                  />
                </label>
              </Form.Field>
              <Form.Field>
                <label>
                  <div>Valor de referência para Skambo</div>
                  <input
                    type="number"
                    name="valueSkambo"
                    // ref={register({
                    //   required: true,
                    //   minLength: 2,
                    //   message: 'Informe um valor aproximado para seu produto',
                    // })}
                  />
                </label>
              </Form.Field>
              <StyledButton>Cadastrar</StyledButton>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default NewProduct;
