import React, { useEffect, useState } from 'react';

import { Container, ResultSearch } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Card from '../../components/card';
import Swal from 'sweetalert2';

import axios from 'axios';

interface ProductsProps {
  name: string;
  category: string;
  thumbnail: string;
  search: string;
  id: string;
}

const UserSearch: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const [filterProducts, setFilterProducts] = useState<ProductsProps[]>([]);
  const [messageSearch, setMessageSearch] = useState('');
  const token = useSelector((session: any) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const history = useHistory();

  const { search } = useParams<ProductsProps>();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setProductsList(data);
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

  useEffect(() => {
    const filterSearch = productsList.filter(({ name }) => {
      const arrProductAPI = name.toLocaleLowerCase().split(' ');
      const arrSearch = search.toLocaleLowerCase().split(' ');

      for (let i = 0; i <= arrProductAPI.length; i++) {
        if (arrProductAPI.includes(arrSearch[i])) {
          return name;
        }
      }
    });

    if (filterSearch.length === 0) {
      setMessageSearch(`Nenhum resultado para ${search}`);
    } else {
      setMessageSearch(`Pesquisou por ${search}`);
    }

    setFilterProducts(filterSearch);
  }, [productsList, search]);

  const goProductPage = (id: string) => {
    {id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`)}
  }

  return (
    <div>
      <Container>
        <h3> {messageSearch} </h3>
        <ResultSearch>
          {filterProducts &&
            filterProducts.map((product: any, key) => {
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
    </div>
  );
};

export default UserSearch;
