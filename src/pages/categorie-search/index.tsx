import React, { useEffect, useState } from 'react';

import { Container, ResultSearch } from './styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Card from '../../components/card';

import axios from 'axios';

interface ProductsProps {
  name: string;
  category: string;
  thumbnail: string;
  search: string;
}

const CategorieSearch: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const [filterProducts, setFilterProducts] = useState<ProductsProps[]>([]);
  const [messageSearch, setMessageSearch] = useState('');
  const token = useSelector(({ session }: RootState) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const { name } = useParams<ProductsProps>();

  console.log(name);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setProductsList(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <h3> {messageSearch} </h3>
        <ResultSearch>
          {productsList &&
            productsList.map((product, key) => {
              return (
                <Card
                  key={key}
                  title={product.name}
                  category={product.category}
                  imgUrl={product.thumbnail}
                />
              );
            })}
        </ResultSearch>
      </Container>
    </div>
  );
};

export default CategorieSearch;
