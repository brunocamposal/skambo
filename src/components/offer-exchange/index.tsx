import React, { useEffect, useState } from 'react';
import { Modal, Header, Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Styled from './styles';
import { InterestButton } from '../product/styles';

import axios from 'axios';

interface IFormInputs {
  checkItem?: any;
}

const OfferExchange = () => {
  const [userProducts, setUserProduct] = useState([]);
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [openModal, setOpenModal] = useState(false);

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

  const onSubmit = (values: IFormInputs) => {
    setOpenModal(false);
  };

  return (
    <Styled.Container>
      <Modal
        trigger={<InterestButton>Tenho interesse</InterestButton>}
        open={openModal}
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}>
        {localStorage.length === 0 ? (
          <Header as="h2" textAlign="center">
            Você não está logado
          </Header>
        ) : (
          <>
            <Header as="h2" textAlign="center">
              Oferecer Produtos para Troca
            </Header>
            {userProducts.length === 0 ? (
              <Styled.MsgError> Você não tem produtos cadastrados</Styled.MsgError>
            ) : (
              userProducts.map(({ name, images }, index) => (
                <>
                  <Styled.ProdBox>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Styled.ProdImage src={images[0]} />
                      <Modal.Content key={index}>
                        <h3>{name}</h3>
                      </Modal.Content>

                      <input type="checkbox" name="checkItem" value={name} ref={register} />
                    </Form>
                  </Styled.ProdBox>
                </>
              ))
            )}
          </>
        )}
        {localStorage.length !== 0 && userProducts.length !== 0 ? (
          <Styled.ButtonOffer type="submit" onClick={handleSubmit(onSubmit)}>
            Ofertar
          </Styled.ButtonOffer>
        ) : null}

        <Styled.ButtonCancel onClick={() => setOpenModal(false)}>Cancelar</Styled.ButtonCancel>
      </Modal>
    </Styled.Container>
  );
};

export default OfferExchange;
