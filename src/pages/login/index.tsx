import React from "react";

import { Link } from "react-router-dom";
import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <>
      <Link to="/">
        <h3 style={{ marginLeft: "30px" }}> Voltar </h3>
      </Link>
      <Container>
        <h1> Login </h1>

        <Link to="/register">
          <h3> Não possui conta? Registrar-se </h3>
        </Link>
      </Container>
    </>
  );
};

export default Login;
