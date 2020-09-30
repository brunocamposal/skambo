import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

const Menu: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <h1 style={{ marginRight: '500px' }}> Menu </h1>
        <Link to="/login">
          <h1> Entrar </h1>
        </Link>
        <Link to="/new-product" onClick={() => history.push('new-product')}>
          Novo Produto
        </Link>
      </Container>
    </>
  );
};

export default Menu;
