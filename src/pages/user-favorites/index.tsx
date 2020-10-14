import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Container, ResultSearch } from './styles';
import Swal from 'sweetalert2';
import Card from '../../components/card';

interface ProductsProps {
  name: string;
  category: any;
  thumbnail: string;
}

const UserFavorites: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const [message, setMessage] = useState(false);
  const token = useSelector(({ session }: RootState) => session.token);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const url = `https://capstone-q2.herokuapp.com/users/${currentUser.id}`;
  const history = useHistory();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setProductsList([...productsList, data.favorites]);
      })
      .catch(({ response }) => {
        if (response?.status === 401 && token != '') {
          Swal.fire({
            title: `Você foi deslogado! Faça o Login novamnte.`,
            confirmButtonText: `Ok`,
          }).then((result) => {
            if (result.isConfirmed) {
              history.push('/login');
            }
          });
        }
      });
  }, []);

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  useEffect(() => {
    if (productsList.length == 0) {
      setMessage(true);
    }else{
      setMessage(false);
    }
  }, [productsList]);


  return (
    <Container>
      <h3> Favoritos </h3>
      {message && <h4> Você não possui nenhum produto como favorito</h4>}
      <ResultSearch>
        {productsList &&
          productsList.map((product: any, key) => {
            return (
              <Card
                key={key}
                title={product.name}
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
