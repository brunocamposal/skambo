import { FAVORITE_PRODUCTS } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const requestFavorite = (token: string) => (dispatch: any) => {
  const decoded: { sub: string } = jwt_decode(token);
  const url = `https://capstone-q2.herokuapp.com/users/${decoded.sub}`;
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(addFavoriteProducts(res.data))
    });
};

const addFavoriteProducts = (newFavorite: any) => ({
  type: FAVORITE_PRODUCTS,
  newFavorite,
});
