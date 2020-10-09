import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Card, Form, Image, Button, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { estados } from './helper';

import * as Styled from './styles';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

import styled from 'styled-components';
// "email": "picolo@mail.com",
// "password": "Picolo11!"

interface ChangeFormInputs {
  firstName?: any;
  lastName?: string;
  cpf?: number | string;
  email?: string;
  phoneNumber?: number | string;
  ownProducts?: string;
  favorites?: string;
  userImage?: any;
  adress?: any;
  cep?: number | string;
  state?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  number?: number;
  referencePoint?: string;
  complement?: string;
  message?: any;
}

const ChangeProfile = ({ setOpenClose }: any) => {
  const { register, handleSubmit, setValue, errors } = useForm<ChangeFormInputs>();
  const [errorMessage, setErrorMessage] = useState('');
  //const [avatarImage, setAvatarImage] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');

  const autoFillCep = (cepUser: number | string) => {
    axios.get(`https://viacep.com.br/ws/${cepUser}/json/`).then(({ data }) => {
      setState(data.uf);
      setCity(data.localidade);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);
    });
  };


  const token = useSelector(({ session }: any) => session.token);

  let userId: any = jwt_decode(token);

  const onSubmit = (values: ChangeFormInputs) => {
    console.log(values);
    // setAvatarImage(values.userImage[0].name);

    axios
      .patch(
        `https://capstone-q2.herokuapp.com/users/${userId.sub}`,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          cpf: values.cpf,
          // email: '',
          phoneNumber: values.phoneNumber,
          // ownProducts: [''],
          // favorites: [''],
          userImage: '',
          adress: {
            cep: values.cep,
            state: values.state,
            city: values.city,
            neighborhood: values.neighborhood,
            street: values.street,
            number: values.number,
            referencePoint: values.referencePoint,
            complement: values.complement,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => {
        if (error.response.status === 400) {
          setErrorMessage('Ops! Aconteceu um erro inesperado!');
        }
      });

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mudanças Salvas!',
        showConfirmButton: false,
        timer: 1300,
      })
  };

  return (
    <>
      <Styled.Container>
        <Styled.BoxContent>
          <Styled.FormContainer>
            
              {/* <Card>
                <Image size="medium" src={'https://picsum.photos/300'} wrapped />
                <Card.Header>
                  AKSUHUKSA
                </Card.Header>
                <Card.Meta>
                  kkkkkk
                </Card.Meta>
              </Card> */}
              
            

            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* <label>Imagem</label>
            <input name="userImage" type="file" placeholder="Insira uma imagem" ref={register} /> */}
              <Form.Group>
                <Form.Field required>
                  <label>Nome</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Nome"
                    ref={register({
                      required: 'Digite seu primeiro nome!',
                      pattern: {
                        value: /[A-Z]{2,}$/i,
                        message: 'Isso não se parece com um e-mail!',
                      },
                    })}
                  />
                  {errors.firstName && <MsgError>{errors.firstName.message}</MsgError>}
                </Form.Field>
                <Form.Field required>
                  <label>Sobrenome</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Sobrenome"
                    ref={register({
                      required: 'Digite seu sobrenome!',
                      pattern: {
                        value: /[A-Z]{2,}$/i,
                        message: 'Isso não se parece com um e-mail!',
                      },
                    })}
                  />
                  {errors.lastName && <MsgError>{errors.lastName.message}</MsgError>}
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Field required>
                  <label>CPF</label>
                  <input
                    name="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    ref={register({
                      required: 'Campo obrigatório!',
                      pattern: {
                        value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/i,
                        message: 'Formato invalido!',
                      },
                    })}
                  />
                  {errors.cpf && <MsgError>{errors.cpf.message}</MsgError>}
                </Form.Field>
              </Form.Group>

              <Form.Field required>
                <label>Telefone</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  ref={register({
                    required: 'Campo obrigatório!',
                  })}
                />
                {errors.phoneNumber && <MsgError>{errors.phoneNumber.message}</MsgError>}
              </Form.Field>

              <Form.Group>
                <Form.Field required>
                  <label>CEP</label>
                  <input
                    name="cep"
                    type="text"
                    placeholder="Digite seu CEP"
                    ref={register({
                      required: 'Campo obrigatório!',
                      pattern: {
                        value: /^[0-9]{8}$/,
                        message: 'Digite somente números',
                      },
                    })}
                    onBlur={({ target }) => autoFillCep(target.value)}
                  />
                  {errors.cep && <MsgError>{errors.cep.message}</MsgError>}
                </Form.Field>

                <Form.Field required>
                  <label>Estado</label>
                  <select name="state" ref={register}>
                    <optgroup label="Estados" defaultValue={state}>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </optgroup>
                  </select>
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Field required>
                  <label>Cidade</label>
                  <input
                    name="city"
                    type="text"
                    defaultValue={city}
                    placeholder="Cidade"
                    ref={register({
                      required: 'Campo obrigatório!',
                    })}
                  />
                  {errors.city && <MsgError>{errors.city.message}</MsgError>}
                </Form.Field>
                <Form.Field required>
                  <label>Bairro</label>
                  <input
                    name="neighborhood"
                    type="text"
                    placeholder="Bairro"
                    defaultValue={neighborhood}
                    ref={register({
                      required: 'Campo obrigatório!',
                    })}
                  />
                  {errors.neighborhood && <MsgError>{errors.neighborhood.message}</MsgError>}
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Field required>
                  <label>Rua</label>
                  <input
                    name="street"
                    type="text"
                    placeholder="Rua/Logradouro"
                    defaultValue={street}
                    ref={register({
                      required: 'Campo obrigatório!',
                    })}
                  />
                  {errors.street && <MsgError>{errors.street.message}</MsgError>}
                </Form.Field>
                <Form.Field required>
                  <label>Número</label>
                  <input name="number" type="text" placeholder="Número" ref={register} />
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Field>
                  <label>Referência</label>
                  <input
                    name="referencePoint"
                    type="text"
                    placeholder="Ex: Ao lado do mercado."
                    ref={register}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Complemento</label>
                  <input
                    name="complement"
                    type="text"
                    placeholder="Ex: Edifício Miranda - Apt 81"
                    ref={register}
                  />
                </Form.Field>
              </Form.Group>

              <Button color="green" type="submit" onClick={handleSubmit(onSubmit)}>
                <Icon name="checkmark" /> Salvar Alterações
              </Button>

              {errorMessage && <MsgError>{errorMessage}</MsgError>}
            </Form>
          </Styled.FormContainer>
        </Styled.BoxContent>
      </Styled.Container>
    </>
  );
};

export default ChangeProfile;

const MsgError = styled.p`
  color: red;
`;
