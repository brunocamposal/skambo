import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import axios from 'axios';

interface ProductsProps {
  name: string;
}

const UserSearch: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const token = useSelector(({ session }: RootState) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setProductsList(data));
  }, []);

  return <Container>{productsList.map((product, index) => product.name)}</Container>;
};

export default UserSearch;
