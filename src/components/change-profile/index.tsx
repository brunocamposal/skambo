import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Modal, Form, Image, Button, Icon } from 'semantic-ui-react';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

//https://capstone-q2.herokuapp.com/users/5
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
  const { register, handleSubmit, errors } = useForm<ChangeFormInputs>();
  const [avatarImage, setAvatarImage] = useState('');

  const token = useSelector(({ session }: any) => session.token);
  console.log(token);

  let userId: any = jwt_decode(token);
  console.log(userId);

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
          email: '',
          phoneNumber: values.phoneNumber,
          ownProducts: [''],
          favorites: [''],
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
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  };

  return (
    <>
      <Modal.Header>Alterar informações</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={'https://picsum.photos/200'} wrapped />

        <Modal.Description>
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
                {errors.firstName && <p>{errors.firstName.message}</p>}
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
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </Form.Field>
            </Form.Group>

            {/* <Form.Field required>
              <label>E-Mail</label>
              <input
                name="email"
                type="text"
                placeholder="Digite seu E-Mail"
                ref={register({
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Isso não se parece com um e-mail!',
                  },
                })}
                // tratar erro
              />
            </Form.Field> */}

            <Form.Group>
              <Form.Field>
                <label>CPF</label>
                <input
                  name="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  ref={register({
                    required: 'Campo necessário!',
                    pattern: {
                      value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/i,
                      message: 'Formato invalido!',
                    },
                  })}
                />
                {errors.cpf && <p>{errors.cpf.message}</p>}
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Telefone</label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="(00) 00000-0000"
                ref={register({
                  required: 'Campo necessário!',
                })}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </Form.Field>

            <Form.Group>
              <Form.Field>
                <label>CEP</label>
                <input
                  name="cep"
                  type="text"
                  placeholder="00000-000"
                  ref={register({
                    required: 'Campo necessário!',
                    pattern: {
                      value: /^\d{5}\-\d{3}$/i,
                      message: 'Formato invalido!',
                    },
                  })}
                />
                {errors.cep && <p>{errors.cep.message}</p>}
              </Form.Field>

              <Form.Field>
                <label>Estado</label>
                <select name="state" ref={register}>
                  <optgroup label="Estados">
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
              <Form.Field>
                <label>Cidade</label>
                <input
                  name="city"
                  type="text"
                  placeholder="Cidade"
                  ref={register({
                    required: 'Campo necessário!',
                  })}
                />
                {errors.city && <p>{errors.city.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Bairro</label>
                <input
                  name="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  ref={register({
                    required: 'Campo necessário!',
                  })}
                />
                {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field>
                <label>Rua</label>
                <input
                  name="street"
                  type="text"
                  placeholder="Rua/Logradouro"
                  ref={register({
                    required: 'Campo necessário!',
                  })}
                />
                {errors.street && <p>{errors.street.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Número</label>
                <input
                  name="number"
                  type="number"
                  placeholder="Número"
                  ref={register}
                  // tratar erro
                />
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
                  // tratar erro
                />
              </Form.Field>
              <Form.Field>
                <label>Complemento</label>
                <input
                  name="complement"
                  type="textArea"
                  placeholder="Ex: Edifício Miranda - apartamento 81"
                  ref={register}
                  // tratar erro
                />
              </Form.Field>
            </Form.Group>

            <Modal.Actions>
              <Button basic color="red">
                <Icon name="remove" /> Cancelar
              </Button>
              <Button color="green" type="submit" onClick={handleSubmit(onSubmit)}>
                <Icon name="checkmark" /> Salvar Alterações
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </>
  );
};

export default ChangeProfile;
