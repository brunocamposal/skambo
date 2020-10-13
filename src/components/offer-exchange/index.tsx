import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';

import axios from "axios"

const OfferExchange = ({ props }: any) => {
  const userIdJwt = useSelector((data) => console.log(data));
  const token = useSelector(({session}: any) => session.token
   );

  const onSubmit = () => {
    // axios.get(`https://capstone-q2.herokuapp.com/products?userId=${userIdJwt}`,{
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    // .then(({data}) => console.log(data))

  }

  return (
    <>
      <Modal open={props}>
        <Modal.Header> Oferecer Produtos para Troca </Modal.Header>
        <Modal.Content>
          PlayStation
          <Styled.ButtonOffer onClick={() => onSubmit()}>Ofertar</Styled.ButtonOffer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default OfferExchange;
