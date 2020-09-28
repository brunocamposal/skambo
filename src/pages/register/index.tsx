import React from 'react';

import { Link } from "react-router-dom";
import { Container } from "./styles";

const Register: React.FC = () => {
  return (
    <>
      <Link to="/">
        <h3 style={{ marginLeft: "30px" }}> Voltar </h3>
      </Link>
      <Container>
        <h1> Registrar-se </h1>
        <Link to="/login">
          <h3> Já possui conta? Entrar! </h3>
        </Link>
      </Container>
    </>
  );
}

export default Register;