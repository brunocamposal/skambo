import React, { useEffect, useState } from 'react';

import { Container, ResultSearch } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Card from '../../components/card';

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
  const token = useSelector(({ session }: RootState) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const { search, id } = useParams<ProductsProps>();
  const history = useHistory()

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setProductsList(data));
  }, []);


  const filterSearch = productsList.filter(({ name }) => {
    const arrProductAPI = name.toLocaleLowerCase().split(' ');
    const arrSearch = search.toLocaleLowerCase().split(' ');

    for(let i = 0; i <= arrProductAPI.length; i++){
      if (arrProductAPI.includes(arrSearch[i])) {
        return name;
      }
    }
  });

  const goProductPage = (id: string) => {
    {id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`)}
  }

  return (
    <div>
      <Container>
        {filterSearch.length === 0 ? (
          <h3> Sem resultados para {search} </h3>
        ) : (
          <h3> Pesquisou por {search} </h3>
        )}
        <ResultSearch>
          {filterSearch &&
            filterSearch.map((product, key) => {
              return (
                <Card
                  key={key}
                  title={product.name}
                  category={product.category}
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
