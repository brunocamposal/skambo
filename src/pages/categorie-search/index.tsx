import React, { useEffect, useState } from 'react';

import { Container, ResultSearch, StyledDropdown } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Card from '../../components/card';
import Swal from 'sweetalert2';

import axios from 'axios';
import { filter } from 'cypress/types/bluebird';

interface ProductsProps {
  name: string;
  category: any;
  thumbnail: string;
  search: string;
}

const CategorieSearch: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductsProps[]>([]);
  const [filterCategory, setFilterCategory] = useState<ProductsProps[]>([]);
  const [dropdownCategory, setDropdownCategory] = useState(false);
  const [messageCategory, setMessageCategory] = useState('');
  const [selected, setSelected] = useState<ProductsProps[]>([]);
  const token = useSelector((session: any) => session.token);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const { name } = useParams<ProductsProps>();
  const history = useHistory();

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

  const formataNome = (str) => {
    return str.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());
  };

  useEffect(() => {
    const filterRes = productsList.filter(({ category }) => {
      return category === formataNome(categoryProducts);
    });

    if (filterRes.length === 0) {
      setMessageCategory(`Nenhum resultado para ${categoryProducts}`);
      setDropdownCategory(false);
    } else {
      setMessageCategory(`${categoryProducts}`);
      setDropdownCategory(true);
    }

    setFilterCategory(filterRes);
  }, [productsList, categoryProducts]);

  const handleChange = (e: any, { value }: any) => {
    setSelected(value);
  };

  const filterDuplicate = [];

  filterCategory.forEach((product) => {
    const duplicated =
      filterDuplicate.findIndex((redItem) => {
        return product.subCategory == redItem.subCategory;
      }) > -1;

    if (!duplicated) {
      filterDuplicate.push(product);
    }
  });

  const subcategorias = filterDuplicate.map((product: any, key) => {
    return { key, text: product.subCategory, value: product.subCategory };
  });

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  return (
    <div>
      <Container>
        <h3>
          {messageCategory.charAt(0).toUpperCase() + messageCategory.substr(1).toLowerCase()}{' '}
        </h3>
        {dropdownCategory && (
          <StyledDropdown
            text="Filtrar por subcategoria"
            multiple
            selection
            fluid
            options={subcategorias}
            onChange={handleChange}
          />
        )}
        <ResultSearch>
          {filterCategory &&
            filterCategory.map((product: any, key) => {
              if (selected.length == 0) {
                return (
                  <Card
                    key={key}
                    title={product.name}
                    category={`${product.category} / ${product.subCategory}`}
                    imgUrl={product.thumbnail}
                    onClick={() => goProductPage(product.id)}
                  />
                );
              }
              if (selected.includes(product.subCategory)) {
                return (
                  <Card
                    key={key}
                    title={product.name}
                    category={`${product.category} / ${product.subCategory}`}
                    imgUrl={product.thumbnail}
                    onClick={() => goProductPage(product.id)}
                  />
                );
              }
            })}
        </ResultSearch>
      </Container>
    </div>
  );
};

export default CategorieSearch;
