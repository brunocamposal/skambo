import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Form } from 'semantic-ui-react';
import FormField from '../../components/form-field';

import FormContainer from '../../components/form-container';

import * as Styled from './styles';
import axios from 'axios';

interface IFormInputs {
  username: string;
  password: string | number;
  passwordRepeat: string | number;
  email: string;
}

const Register: React.FC = () => {
  const { register, watch, handleSubmit, errors } = useForm<IFormInputs>();

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data: object): void => {
    axios
      .post(' https://capstone-q2.herokuapp.com/register', data)
      .then((res) => {
        setErrorMessage('');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setErrorMessage('Email já cadastrado');
        }
      });
  };

  return (
    <>
      <FormContainer
        props={
          <>
            <h1>Cadastrar-se</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                required
                name="email"
                label="E-mail"
                inputPlace="Digite seu e-mail"
                inputRef={register({
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Isso não se parece com um e-mail!',
                  },
                })}
                error={errors.email}
              />

              <FormField
                required
                name="password"
                type="password"
                label="Senha"
                inputPlace="Digite sua Senha"
                inputRef={register({
                  required: 'Senha Necessária',
                  minLength: {
                    value: 6,
                    message: 'Senha muito curta!',
                  },
                })}
                error={errors.password}
              />

              <FormField
                required
                name="passwordRepeat"
                type="password"
                label="Confirme sua senha"
                inputPlace="Digite sua Senha"
                inputRef={register({
                  validate: (value) =>
                    value === watch('password', '') || 'As senhas não coincidem!',
                  required: 'Senha Necessária',
                })}
                error={errors.passwordRepeat}
              />
              {errorMessage && <Styled.Error>{errorMessage}</Styled.Error>}

              <div>
                <Styled.Button type="submit">Cadastrar!</Styled.Button>
                <Styled.LinkWrapper to="/login">
                  <h3> Já possui conta? Entrar! </h3>
                </Styled.LinkWrapper>
              </div>
            </Form>
          </>
        }
      />
    </>
  );
};

export default Register;
