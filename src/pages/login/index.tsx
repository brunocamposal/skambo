import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as Styled from "./styles";

interface IFormInputs {
  username: string;
  password: string | number;
  email: string;
}

const Login: React.FC = () => {
  const [token, setToken] = useState("");
  const [requestError, setRequestError] = useState("");
  console.log(token);
  console.log(requestError);
  
  
  const { register, handleSubmit, setValue, errors } = useForm<IFormInputs>();

  const onSubmit = (values: IFormInputs) => {
    axios.post("http://localhost:3001/login", values).then(({ data }) => {
      console.log(data);
      setRequestError('');
      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);
      //history.push('/users');
    })
      .catch(({ response }) => {
        if (response.status === 400) {
          return setRequestError('Incorrect E-Mail or Password.');
        }
        return setRequestError('Server error. Try again!');
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

                    <h1> Login </h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Field required>
                        <label>E-Mail</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="E-Mail"
                          ref={register({
                            required: "precisa emal",
                          })}
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email.message}</p>
                        )}
                      </Form.Field>

                      <Form.Field required>
                        <label>Password</label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Password"
                          ref={register({
                            required: "Password Required",
                            minLength: {
                              value: 6,
                              message: "Password too Short",
                            },
                          })}
                        />
                        {errors.password && (
                          <p style={{ color: "red" }}>
                            {errors.password.message}
                          </p>
                        )}
                      </Form.Field>

                      <Styled.ButtonForm type="submit" inverted color="red">
                        Entrar
                      </Styled.ButtonForm>
                    </Form>
                  </Styled.LoginBox>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Styled.ContainerLogin>
        </Styled.Main>
      </Styled.Background>

      <Link to="/register">
        <h3> Não possui conta? Registrar-se </h3>
      </Link>
    </>
  );
};

export default Login;
