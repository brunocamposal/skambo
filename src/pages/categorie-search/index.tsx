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
  category: any;
  thumbnail: string;
  search: string;
}

interface stateProps {
  session: { token: string };
}

const CategorieSearch: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const [filterCategory, setFilterCategory] = useState<ProductsProps[]>([]);
  const [messageCategory, setMessageCategory] = useState('');
  const token = useSelector(({ session }: RootState) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const { name } = useParams<ProductsProps>();
  const history = useHistory();

  const session = useSelector((state: stateProps) => state.session);

  const categoryProducts = name;

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
        if (response?.status === 401 && session.token != '') {
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
    const filterRes = productsList.filter(({ category }) => {
      const arrCategory = category.map((value: any) => value.toLocaleLowerCase());

      for (let i = 0; i <= arrCategory.length; i++) {
        if (arrCategory.includes(String(categoryProducts))) {
          return category;
        }
      }
    });

    if (filterRes.length === 0) {
      setMessageCategory(`Nenhum resultado para ${categoryProducts}`);
    } else {
      setMessageCategory(`${categoryProducts}`);
    }

    setFilterCategory(filterRes);
  }, [productsList, categoryProducts]);

  return (
    <div>
      <Container>
        <h3>
          {' '}
          {messageCategory.charAt(0).toUpperCase() + messageCategory.substr(1).toLowerCase()}{' '}
        </h3>
        <ResultSearch>
          {filterCategory &&
            filterCategory.map((product: any, key) => {
              return (
                <Card
                  key={key}
                  title="teste"
                  category={product.category.join('/ ')}
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
