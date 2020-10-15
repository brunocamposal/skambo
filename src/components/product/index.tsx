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
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from './loading';
import Swal from 'sweetalert2';
import { requestLogin } from '../../redux/actions/session';


const Product: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState({
    id: '',
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
  const token = useSelector(({ session }: RootState) => session.token);
  const user = useSelector(({ session }: RootState) => session.currentUser);
  const userFavorites = useSelector(({ session }: RootState) => session.currentUser.favorites);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

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
  }, []);

  const favoritesJSON: any = [...userFavorites, products];

  const handleFavorite = () => {
    const url = `https://capstone-q2.herokuapp.com/users/${user.id}`;

    const alreadyAdd = Object.values(userFavorites).some(
      (favorite: any) => favorite.id === products.id
    );

    if (alreadyAdd) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Produto já adicionado aos favoritos!',
        showConfirmButton: false,
        timer: 1300,
      });
    } else {
      axios
        .patch(
          url,
          { favorites: favoritesJSON },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          dispatch(requestLogin(token));
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado aos favoritos!',
            showConfirmButton: false,
            timer: 1300,
          });
        })
        .catch((err) => console.log(err));
    }
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
            <InterestButton onClick={() => history.push('/user/interest')}>
              Tenho Interesse
            </InterestButton>
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
