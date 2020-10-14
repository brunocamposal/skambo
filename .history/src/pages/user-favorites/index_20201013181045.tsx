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
  const token = useSelector((session: any) => session.token);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const history = useHistory();

  console.log("usuario:");
  console.log(user)

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  return (
    <Container>
      <h3> Favoritos </h3>
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
