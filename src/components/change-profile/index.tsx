import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import * as Styled from './styles';
import { requestUserInfo } from '../../redux/actions/session';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface ChangeFormInputs {
  firstName?: any;
  lastName?: string;
  cpf?: number | string;
  email?: string;
  phoneNumber?: number | string;
  ownProducts?: string;
  favorites?: string;
  userImage?: string;
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

const ChangeProfile = () => {
  const { register, handleSubmit, errors } = useForm<ChangeFormInputs>();
  const [errorMessage, setErrorMessage] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');

  const dispatch = useDispatch();

  const token = useSelector(({ session }: any) => session.token);
  let userId: any = jwt_decode(token);

  const autoFillCep = (cepUser: number | string) => {
    axios.get(`https://viacep.com.br/ws/${cepUser}/json/`).then(({ data }) => {
      setState(data.uf);
      setCity(data.localidade);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);
    });
  };

  const onSubmit = (values: ChangeFormInputs) => {
    axios
      .patch(

        `https://capstone-q2.herokuapp.com/users/${userId.sub}`,
        {
          name: values.firstName,
          lastName: values.lastName,
          cpf: values.cpf,
          phoneNumber: values.phoneNumber,
          userImage: values.userImage,
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
      ).then(() => {
        dispatch(requestUserInfo(token));
      })
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
    });
  };

  const currentUser = localStorage.getItem('currentUser');
  let user: any;
  if (typeof currentUser === 'string') {
    user = JSON.parse(currentUser);
  }
  console.log(user);

  return (
    <>
      <Styled.Container>
        <Styled.BoxContent>
          <Styled.FormContainer>
            <Styled.Header>
              <h1>Alterar Informações</h1>
            </Styled.Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
              <label>Avatar (url)</label>
                <input
                  name="userImage"
                  type="text"
                  placeholder="Insira uma URL"
                  ref={register}
                  defaultValue={user.userImage}
                />
              </Form.Field>
              <Form.Group widths={2}>
                <Form.Field required>
                  <label>Nome</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Nome"
                    ref={register({
                      required: 'Digite seu primeiro nome!',
                      pattern: {
                        value: /[A-Za-zÀ-ü]{2,}$/i,
                        message: 'Isso não se parece com um nome!',
                      },
                    })}
                    defaultValue={user.firstName}
                  />
                  {errors.firstName && (
                    <Styled.MsgError>{errors.firstName.message}</Styled.MsgError>
                  )}
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
                        value: /[A-Za-zÀ-ü]{2,}$/i,
                        message: 'Isso não se parece com um sobrenome!',
                      },
                    })}
                    defaultValue={user.lastName}
                  />
                  {errors.lastName && <Styled.MsgError>{errors.lastName.message}</Styled.MsgError>}
                </Form.Field>
              </Form.Group>

              <Form.Group widths={2}>
                <Form.Field required>
                  <label>CPF</label>
                  <input
                    name="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    ref={register({
                      required: 'Campo obrigatório!',
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: 'Digite somente os 11 números de seu CPF',
                      },
                    })}
                    defaultValue={user.cpf}
                  />
                  {errors.cpf && <Styled.MsgError>{errors.cpf.message}</Styled.MsgError>}
                </Form.Field>
                <Form.Field required>
                  <label>Telefone</label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    ref={register({
                      required: 'Campo obrigatório!',
                    })}
                    defaultValue={user.phoneNumber}
                  />
                  {errors.phoneNumber && (
                    <Styled.MsgError>{errors.phoneNumber.message}</Styled.MsgError>
                  )}
                </Form.Field>
              </Form.Group>

              <Form.Group widths={2}>
                <Form.Field required width={10}>
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
                    defaultValue={user.adress ? user.adress.cep : ''}
                  />
                  {errors.cep && <Styled.MsgError>{errors.cep.message}</Styled.MsgError>}
                </Form.Field>

                <Form.Field required width={6}>
                  <label>Estado</label>
                  <select name="state" ref={register}>
                    <optgroup label="Estados">
                      <option value="AC" selected={state === 'AC' && true}>
                        Acre
                      </option>
                      <option value="AL" selected={state === 'AL' && true}>
                        Alagoas
                      </option>
                      <option value="AP" selected={state === 'AP' && true}>
                        Amapá
                      </option>
                      <option value="AM" selected={state === 'AM' && true}>
                        Amazonas
                      </option>
                      <option value="BA" selected={state === 'BA' && true}>
                        Bahia
                      </option>
                      <option value="CE" selected={state === 'CE' && true}>
                        Ceará
                      </option>
                      <option value="DF" selected={state === 'DF' && true}>
                        Distrito Federal
                      </option>
                      <option value="ES" selected={state === 'ES' && true}>
                        Espírito Santo
                      </option>
                      <option value="GO" selected={state === 'GO' && true}>
                        Goiás
                      </option>
                      <option value="MA" selected={state === 'MA' && true}>
                        Maranhão
                      </option>
                      <option value="MT" selected={state === 'MT' && true}>
                        Mato Grosso
                      </option>
                      <option value="MS" selected={state === 'MS' && true}>
                        Mato Grosso do Sul
                      </option>
                      <option value="MG" selected={state === 'MG' && true}>
                        Minas Gerais
                      </option>
                      <option value="PA" selected={state === 'PA' && true}>
                        Pará
                      </option>
                      <option value="PB" selected={state === 'PB' && true}>
                        Paraíba
                      </option>
                      <option value="PR" selected={state === 'PR' && true}>
                        Paraná
                      </option>
                      <option value="PE" selected={state === 'PE' && true}>
                        Pernambuco
                      </option>
                      <option value="PI" selected={state === 'PI' && true}>
                        Piauí
                      </option>
                      <option value="RJ" selected={state === 'RJ' && true}>
                        Rio de Janeiro
                      </option>
                      <option value="RN" selected={state === 'RN' && true}>
                        Rio Grande do Norte
                      </option>
                      <option value="RS" selected={state === 'RS' && true}>
                        Rio Grande do Sul
                      </option>
                      <option value="RO" selected={state === 'RO' && true}>
                        Rondônia
                      </option>
                      <option value="RR" selected={state === 'RR' && true}>
                        Roraima
                      </option>
                      <option value="SC" selected={state === 'SC' && true}>
                        Santa Catarina
                      </option>
                      <option value="SP" selected={state === 'SP' && true}>
                        São Paulo
                      </option>
                      <option value="SE" selected={state === 'SE' && true}>
                        Sergipe
                      </option>
                      <option value="TO" selected={state === 'TO' && true}>
                        Tocantins
                      </option>
                    </optgroup>
                  </select>
                </Form.Field>
              </Form.Group>

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
                {errors.city && <Styled.MsgError>{errors.city.message}</Styled.MsgError>}
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
                {errors.neighborhood && (
                  <Styled.MsgError>{errors.neighborhood.message}</Styled.MsgError>
                )}
              </Form.Field>

              <Form.Group widths={2}>
                <Form.Field required width={10}>
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
                  {errors.street && <Styled.MsgError>{errors.street.message}</Styled.MsgError>}
                </Form.Field>
                <Form.Field required width={6}>
                  <label>Número</label>
                  <input name="number" type="text" placeholder="Número" ref={register} />
                </Form.Field>
              </Form.Group>

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

              <Styled.ButtonForm type="submit" onClick={handleSubmit(onSubmit)}>
                <Icon name="checkmark" /> Salvar Alterações
              </Styled.ButtonForm>

              {errorMessage && <Styled.MsgError>{errorMessage}</Styled.MsgError>}
            </Form>
          </Styled.FormContainer>
        </Styled.BoxContent>
      </Styled.Container>
    </>
  );
};

export default ChangeProfile;
