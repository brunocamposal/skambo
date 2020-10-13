import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Container, ResultSearch } from './styles';
import Swal from 'sweetalert2';
import Card from '../../components/card';

const UserFavorites: React.FC = () => {
  const [productsList, setProductsList] = useState([]);
  const [message, setMessage] = useState(false);
  const user = useSelector(({ session }: RootState) => session.currentUser);
  const history = useHistory();

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  useEffect(() => {
    if (productsList.length == 0) {
      setMessage(true);
    }
  }, [productsList]);

  return (
    <Container>
      <h3> Favoritos </h3>
      {message && <h4> Não possui produtos favoritados </h4>}
      <ResultSearch>
        {productsList &&
          productsList.map((product: any, key) => {
            return (
              <Card
                key={key}
                title="teste"
                category={product.category.join('/ ')}
                imgUrl={product.thumbnail}
                onClick={() => goProductPage(product.id)}
              />
            );
          })}
      </ResultSearch>
    </Container>
  );
};

export default UserFavorites;
