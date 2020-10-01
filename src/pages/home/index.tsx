import React from "react";
import MostViewedProducts from '../../components/most-viewed-products'
import Banner from '../../components/banner-slider'
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <MostViewedProducts />
    </Container>
  );
};

export default Home;
