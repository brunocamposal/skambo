import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Grid, Form } from "semantic-ui-react";

import { Link } from "react-router-dom";
import * as Styled from "./styles";

interface IFormInputs {
  username: string;
  password: string | number;
  email: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, setValue, errors } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => console.log(data);

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
                        <label>Username</label>
                        <input
                          type="text"
                          placeholder="Username"
                          onChange={(e) => setValue("username", e.target.value)}
                          name="username"
                          ref={register({
                            required: "username necessario",
                            minLength: 6,
                            pattern: {
                              value: /[A-Za-z]/,
                              message: "username invalido",
                            },
                          })}
                        />
                        {errors.username && (
                          <p style={{ color: "red" }}>
                            {errors.username.message}
                          </p>
                        )}
                      </Form.Field>

                      <Form.Field required>
                        <label>E-Mail</label>
                        <input
                          type="text"
                          placeholder="E-Mail"
                          onChange={(e) => setValue("email", e.target.value)}
                          name="e-mail"
                          ref={register({
                            required: "email necessario",
                            pattern: {
                              value: /[a-zA-Z]{2,} [a-zA-Z]{2,}( [a-zA-Z]{2,})*/,
                              message: "email invalido",
                            },
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
                          placeholder="Password"
                          type="Password"
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
