import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FormField from '../../components/form-field';
import { login } from '../../redux/actions/session';
import FormContainer from '../../components/form-container';
import logo_image from '../../media/img/logotipo.png';

import * as Styled from './styles';

interface IFormInputs {
  username: string;
  password: string | number;
  email: string;
  values: string;
}

const Login: React.FC = () => {
  const [requestError, setRequestError] = useState('');
  console.log(requestError);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<IFormInputs>();

  const onSubmit = (values: IFormInputs) => {
    axios
      .post('https://capstone-q2.herokuapp.com/login', values)
      .then(({ data }) => {
        dispatch(login(data.accessToken));
        localStorage.setItem('token', data.accessToken);
        //history.push('/users');
      })
      .catch(({ response }) => {
        if (response?.status === 400) {
          return setRequestError('E-Mail ou Senha incorretos.');
        }
        return setRequestError('Ops, aconteceu algo de errado!');
      });
  };

  return (
    <>
      <FormContainer
        props={
          <>
            <Styled.ImgForm src={logo_image} />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                required
                name="email"
                label="Digite seu E-Mail"
                inputPlace="E-Mail"
                inputRef={register({
                  required: 'E-mail Necessário',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Formato Inválido!',
                  },
                })}
                error={errors.email}
              />

              <FormField
                required
                name="password"
                type="password"
                label="Digite sua Senha"
                inputPlace="Senha"
                inputRef={register({
                  required: 'Senha Necessária',
                  minLength: {
                    value: 6,
                    message: 'Senha muito curta!',
                  },
                })}
                error={errors.password}
              />
              {requestError}
              <Styled.ButtonForm type="submit">Fazer Login</Styled.ButtonForm>
            </Form>
            <Styled.LinkForm to="/register">
              <h3> Não possui conta? Registrar-se </h3>
            </Styled.LinkForm>
          </>
        }
      />
    </>
  );
};

export default Login;
