import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import jwt_decode from "jwt-decode";
import { Container } from './styles';
import Swal from 'sweetalert2';

const UserFavorites: React.FC = () => {
  const [productsList, setProductsList] = useState([]);
  const token = useSelector((session: any) => session.token);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const url = 'https://capstone-q2.herokuapp.com/products';
  const history = useHistory();
  const decoded: { sub: string } = jwt_decode(token);

  console.log(currentUser);

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
  return (
    <Container>
      <h3> Favoritos </h3>
    </Container>
  );
};

export default UserFavorites;
