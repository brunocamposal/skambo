import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import FormField from "../../components/form-field";

import { login } from "../../redux/actions/session";

import * as Styled from "./styles";

interface IFormInputs {
  username: string;
  password: string | number;
  email: string;
  values: string;
}

const Login: React.FC = () => {
  const [requestError, setRequestError] = useState("");
  console.log(requestError);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<IFormInputs>();

  const onSubmit = (values: IFormInputs) => {
    axios
      .post("https://capstone-q2.herokuapp.com/login", values)
      .then(({ data }) => {
        dispatch(login(data.accessToken));
        localStorage.setItem("token", data.accessToken);
        //history.push('/users');
      })
      .catch(({ response }) => {
        if (response?.status === 400) {
          return setRequestError("E-Mail ou Senha incorretos.");
        }
        return setRequestError("Ops, aconteceu algo de errado!");
      });
  };

  return (
    <>
      <Link to="/">
        <h3 style={{ marginLeft: "30px" }}> Voltar </h3>
      </Link>
      <Styled.Background>
        <Styled.Main>
          <Styled.ContainerLogin>
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Styled.ImageBox>
                    <Styled.LoginIllustration
                      src={"https://picsum.photos/200/300"}
                    />
                  </Styled.ImageBox>
                </Grid.Column>
                <Grid.Column>
                  <Styled.LoginBox>
                    <Styled.LogoCenter>
                      <Styled.LogoLogin src={""} />
                    </Styled.LogoCenter>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <FormField
                        required
                        name="email"
                        label="Digite seu E-Mail"
                        inputPlace="E-Mail"
                        inputRef={register({
                          required: "E-mail Necessário",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Formato Inválido!",
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
                          required: "Senha Necessária",
                          minLength: {
                            value: 6,
                            message: "Senha muito curta!",
                          },
                        })}
                        error={errors.password}
                      />
                      {requestError}
                      <Styled.ButtonForm type="submit" inverted color="blue">
                        Fazer Login
                      </Styled.ButtonForm>
                    </Form>
                    <Link to="/register">
                      <h3> Não possui conta? Registrar-se </h3>
                    </Link>
                  </Styled.LoginBox>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Styled.ContainerLogin>
        </Styled.Main>
      </Styled.Background>
    </>
  );
};

export default Login;
