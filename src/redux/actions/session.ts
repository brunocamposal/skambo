import { USER_INFO } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const requestUserInfo = (token: string) => (dispatch: any) => {
  const decoded: { sub: string } = jwt_decode(token);
  const url = `https://capstone-q2.herokuapp.com/users/${decoded.sub}`;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(updateUserInfo(token, res.data));
      localStorage.setItem('currentUser', JSON.stringify(res.data));
    });
};


const updateUserInfo = (token: string, currentUser: any) => ({
  type: USER_INFO,
  token,
  currentUser,
});
