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

  const { id } = useParams();
  const url = `https://capstone-q2.herokuapp.com/products/`;
  const token = useSelector((session: any) => session.token);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');

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
            <InterestButton onClick={() => history.push('/user/interest')}>
              Tenho Interesse
            </InterestButton>
            <FavButton onClick={() => 'add favotites'}>
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
