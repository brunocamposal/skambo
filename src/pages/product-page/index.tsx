import React from 'react';

import { CommentSection } from '../../components';
import Product from '../../components/product';
import { Container } from './styles';

const ProductPage: React.FC = () => {
  return (
    <Container>
      <Product />
      <CommentSection />
    </Container>
  );
};

export default ProductPage;
