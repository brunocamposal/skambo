import React from "react";
// import MostViewedProducts from '../../components/most-viewed-products'
import Product from '../../components/product'
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

export default Home;
