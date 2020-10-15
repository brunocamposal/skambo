import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Container, ResultSearch, CardContainer, StyledHeart } from './styles';
import Swal from 'sweetalert2';
import * as Styled from '../../components/card/styles';
import { Popup } from 'semantic-ui-react';
import './user-favorites.css';
import axios from 'axios';
import { requestUserInfo } from '../../redux/actions/session';

const UserFavorites: React.FC = () => {
  const [message, setMessage] = useState(false);
  const token = useSelector(({ session }: RootState) => session.token);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const url = `https://capstone-q2.herokuapp.com/users/${currentUser.id}`;

  const handleRemoveFavorite = (id: string) => {
    const filterID: any = currentUser.favorites.filter((product: any) => product.id !== id);

    axios
      .patch(
        url,
        { favorites: filterID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        dispatch(requestUserInfo(token));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto removido com sucesso!',
          showConfirmButton: false,
          timer: 1300,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (currentUser.favorites.length === 0) {
      setMessage(true);
    }else{
      setMessage(false);
    }
  }, [currentUser]);

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  return (
    <Container>
      <h3> Favoritos </h3>
      {message && <h4> Você não possui nenhum produto como favorito</h4>}
      <ResultSearch>
        {currentUser.favorites &&
          Object.values(currentUser.favorites).map((product: any, key) => {
            return (
              <>
                <CardContainer>
                  <Styled.Card key={key}>
                    <img
                      src={product.thumbnail}
                      onClick={() => goProductPage(product.id)}
                      alt="card"
                    />
                    <div>
                      <Popup content={product.name} trigger={<strong>{product.name}</strong>} />
                      <p>{`${product.category} / ${product.subCategory}`}</p>
                    </div>
                  </Styled.Card>
                  <StyledHeart>
                    <div className="iconFavored">
                      <AiFillHeart />
                    </div>
                    <div className="iconDisfavor" onClick={() => handleRemoveFavorite(product.id)}>
                      <AiOutlineHeart />
                    </div>
                  </StyledHeart>
                </CardContainer>
              </>
            );
          })}
      </ResultSearch>
    </Container>
  );
};

export default UserFavorites;
