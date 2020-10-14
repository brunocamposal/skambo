import React, { useEffect, useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';

import axios from 'axios';

const OfferExchange = ({ props }: any) => {
  const [userProducts, setUserProduct] = useState([]);
  console.log(userProducts);

  const userId = useSelector(({ session }: any) => session.currentUser.id);
  const token = useSelector(({ session }: any) => session.token);

  useEffect(() => {
    axios
      .get(`https://capstone-q2.herokuapp.com/products?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setUserProduct(data));
  }, []);

  return (
    <>
      <Modal open={props} closeOnEscape >
        <>
          {localStorage.length === 0 ? ( <>
            <Modal.Header > Você não está logado </Modal.Header> </>
          ) : (
            <>
              <Modal.Header> Oferecer Produtos para Troca </Modal.Header>

              {userProducts.length === 0 ? (
                <Styled.MsgError> Você não tem produtos cadastrados</Styled.MsgError>
              ) : (
                userProducts.map(({ name }, index) => (
                  <Modal.Content key={index} >
                    {name}
                    <Styled.ButtonOffer onClick={() => ''}>Ofertar</Styled.ButtonOffer>
                  </Modal.Content>
                ))
              )}
            </>
          )}
        </>
      </Modal>
    </>
  );
};

export default OfferExchange;
