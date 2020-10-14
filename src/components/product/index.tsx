import React, { useState, useEffect } from 'react';
import {
  ProductCard,
  CardImg,
  CardThumb,
  ProductThumb,
  CardProduct,
  ProductShow,
  CardInfo,
  ProductInfoValue,
  ProductInfoName,
  ProductInfoDesc,
  ProductInfoIntr,
  InterestButton,
  FavButton,
} from './styles';
import { Icon } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { Loading } from './loading';

import OfferExchange from '../offer-exchange';

const Product: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState({
    name: '',
    description: '',
    usability: '',
    value: '',
    thumbnail: '',
    images: [],
    interests: [],
  });

  const { id }: any = useParams();
  const url = `https://capstone-q2.herokuapp.com/products/`;
  const token = useSelector((session: any) => session.token);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');

  const [modalExchange, setModalExchange] = useState(false);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const product = res.data[id - 1];
        setProducts(product);
        setLoading(false);

        setImage(product.thumbnail);
      })
      .catch((err) => console.log(err));
  }, [setProducts]);

  const handleFavorite = () => {
    history.push('/favorites');
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductCard>
          <CardImg>
            <CardThumb>
              <ProductThumb
                src={products.thumbnail}
                alt="thumb"
                onMouseOver={() => setImage(products.thumbnail)}
              />
              {products.images.map((image, index) => {
                return (
                  <ProductThumb
                    key={index}
                    src={image}
                    alt="thumbnail"
                    onMouseOver={() => setImage(products.images[index])}
                  />
                );
              })}
            </CardThumb>
            <CardProduct>
              <ProductShow src={image} alt="destak" />
            </CardProduct>
          </CardImg>
          <CardInfo>
            <ProductInfoName>{products.name}</ProductInfoName>
            <ProductInfoValue>R$ {products.value}</ProductInfoValue>
            <ProductInfoDesc>{products.description}</ProductInfoDesc>
            <ProductInfoDesc>
              <b>CONDIÇÃO: </b>
              {products.usability}
            </ProductInfoDesc>
            <ProductInfoIntr>
              Interesses:
              {products.interests.map((interest, index) => {
                return <li key={index}>{interest}</li>;
              })}
            </ProductInfoIntr>
            <InterestButton onClick={() => setModalExchange(true)}>Tenho Interesse</InterestButton>
            <OfferExchange props={modalExchange} />
            <FavButton onClick={handleFavorite}>
              <Icon name="heart" />
              Adicionar aos favoritos
            </FavButton>
          </CardInfo>
        </ProductCard>
      )}
    </>
  );
};

export default Product;
