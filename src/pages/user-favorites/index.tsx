import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Container, ResultSearch, CardContainer, StyledHeart } from './styles';
import Swal from 'sweetalert2';
import * as Styled from '../../components/card/styles';
import { Popup } from 'semantic-ui-react';
import './user-favorites.css';

const UserFavorites: React.FC = () => {
  const [removeFavorite, setRemoveFavorite] = useState(0);
  const [message, setMessage] = useState(false);
  const token = useSelector(({ session }: RootState) => session.token);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const url = `https://capstone-q2.herokuapp.com/users/${currentUser.id}`;
  const history = useHistory();

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
                      <p>{product.category.join('/ ')}</p>
                    </div>
                  </Styled.Card>
                  <StyledHeart>
                    <div className="iconFavored">
                      <AiFillHeart />
                    </div>
                    <div className="iconDisfavor" onClick={() => alert(product.id)}>
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
