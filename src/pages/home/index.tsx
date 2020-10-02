import React from "react";
import MostViewedProducts from '../../components/most-viewed-products'
import { Container } from "./styles";
import Product from '../../components/product'

const Home: React.FC = () => {
  return (
    <Container>
      <h1> Conteúdo da Home </h1>
      <Product />
      <MostViewedProducts />
    </Container>
  );
};

export default Home;
