import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';

import axios from 'axios';

const OfferExchange = ({ props }: any) => {
  const [userProducts, setUserProduct] = useState([]);

  const userIdJwt = useSelector((data) => console.log(data));
  const token = useSelector(({ session }: any) => session.token);

  const onSubmit = () => {
    axios
      .get(`https://capstone-q2.herokuapp.com/products?userId=6`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => console.log(data)
      //setUserProduct()
      );
  };

  return (
    <>
      <Modal open={props}>
        <Modal.Header> Oferecer Produtos para Troca </Modal.Header>

        {userProducts.map((produtos, index) => (
          <Modal.Content key={index}>
            {produtos}
            <Styled.ButtonOffer onClick={() => ""}>Ofertar</Styled.ButtonOffer>
          </Modal.Content>
        ))}
      </Modal>
    </>
  );
};

export default OfferExchange;
