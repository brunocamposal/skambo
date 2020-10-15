import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestUserInfo  } from '../../redux/actions/session';
import { Form } from 'semantic-ui-react';

import FormField from '../../components/form-field';
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
  const { register, handleSubmit, errors } = useForm<IFormInputs>();
  const dispatch = useDispatch();

  const [requestError, setRequestError] = useState('');
  const history = useHistory();

  const onSubmit = (values: IFormInputs) => {

    axios
      .post('https://capstone-q2.herokuapp.com/login', values)
      .then(({ data }) => {
        dispatch(requestUserInfo(data.accessToken));
        localStorage.setItem('token', data.accessToken);
        history.push('/');
        
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
                label="E-Mail"
                inputPlace="Digite seu E-Mail"
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
              <Styled.ButtonForm type="submit">Fazer Login</Styled.ButtonForm>
            </Form>
            <Styled.LinkForm to="/register">
              <h3> Não possui conta? Registrar-se </h3>
            </Styled.LinkForm>
            <Styled.Error>{requestError}</Styled.Error>
          </>
        }
      />
    </>
  );
};

export default Login;
