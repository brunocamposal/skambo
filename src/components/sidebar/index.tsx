import React from "react";

import { Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <h1> Categorias </h1>
      <span> -Jogos </span>
      <span> -Bicicleta </span>
      <span> -Livros </span>
      <span> -Roupas </span>
    </Container>
  );
};

export default Sidebar;
