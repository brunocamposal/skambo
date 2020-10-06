import React from "react";
import MostViewedProducts from '../../components/most-viewed-products'
import { Container } from "./styles";
import Product from '../../components/product'

const Home: React.FC = () => {
  return (
    <Container>
      <MostViewedProducts />
    </Container>
  );
};

export default Home;
