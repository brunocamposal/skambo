import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <>
      <Container>
        <h1 style={{marginRight: "500px"}}> Menu </h1>
        <Link to="/login">
          <h1> Entrar </h1>
        </Link>
      </Container>
    </>
  );
};

export default Menu;
