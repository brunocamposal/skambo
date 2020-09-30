import React from "react";
import { Link } from "react-router-dom";
import MobileCategories from "../mobile/categories";
import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <>
      <Container>
        <MobileCategories />
        <h1> Menu </h1>
        <Link to="/login">
          <h1> Entrar </h1>
        </Link>
      </Container>
    </>
  );
};

export default Menu;
