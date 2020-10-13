import React from "react";
import Product from '../../components/product'
import { Container } from "./styles";

const ProductPage: React.FC = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

export default ProductPage;
