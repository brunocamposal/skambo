import { LOGIN } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const requestLogin = (token: string) => (dispatch: any) => {
  const decoded: { sub: string } = jwt_decode(token);
  const url = `https://capstone-q2.herokuapp.com/users/${decoded.sub}`;
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(login(token, res.data))
      localStorage.setItem('currentUser', JSON.stringify(res.data));
    });
};

const login = (token: string, user: any) => ({
  type: LOGIN,
  token,
  user,
});
