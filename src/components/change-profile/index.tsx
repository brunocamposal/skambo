import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Modal, Form, Image, Button, Icon } from 'semantic-ui-react';

interface Props {}
//https://capstone-q2.herokuapp.com/users/5
// "email": "cell@mail.com",
// "password": "Cell11!"

interface ChangeFormInputs {
  name: string;
  label: string;
  userImage?: any;
}

const ChangeProfile = ({ setOpenClose }: any) => {
  const { register, handleSubmit, errors } = useForm<ChangeFormInputs>();
  const [avatarImage, setAvatarImage] = useState('');
  console.log(avatarImage);

  const onSubmit = (values: ChangeFormInputs) => {
    console.log(values);
    setAvatarImage(values.userImage[0].name);

    // axios.put(
    //   `https://capstone-q2.herokuapp.com/users/${5}`,
    //   {
    //     users: {
    //       firstName: values.name,
    //       lastName: 'lastName',
    //       cpf: '000.000.000-00',
    //       email: 'email@mail.com',
    //       phoneNumber: '(41) 99999-9999',
    //       ownProducts: ['product1', 'product2', 'product3'],
    //       favorites: ['favProduct1', 'favProduct2', 'favProduct3'],
    //       userImage: 'url_imagem',
    //       adress: {
    //         cep: '20300-060',
    //         state: 'PR',
    //         city: 'Curitiba',
    //         neighborhood: 'Centro',
    //         street: 'Rua dos Aphagalios',
    //         number: '79',
    //         referencePoint: 'Edificio Miranda',
    //         complement: 'apt 81',
    //       },
    //     },
    //   },
    //   {
    //     headers: { Authorization: 'token' },
    //   }
    // );
  };

  return (
    <>
      <Modal.Header>Alterar informações</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={avatarImage} wrapped />

        <Modal.Description>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Imagem</label>
            <input name="userImage" type="file" placeholder="Insira uma imagem" ref={register} />
            <Form.Group>
              <Form.Field required>
                <label>Nome</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Nome"
                  ref={register({
                    required: 'Digite seu primeiro nome!',
                  })}
                  // tratar erro
                />
              </Form.Field>
              <Form.Field required>
                <label>Sobrenome</label>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Sobrenome"
                  ref={register({
                    required: 'Digite seu sobrenome!',
                  })}
                  // tratar erro
                />
              </Form.Field>
            </Form.Group>

            <Form.Field required>
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
            </Form.Field>

            <Form.Group>
              <Form.Field>
                <label>CPF</label>
                <input
                  name="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  ref={register({
                    pattern: {
                      value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/i,
                      message: 'Formato invalido!',
                    },
                  })}
                  // tratar erro
                />
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Telefone</label>
              <input
                name="tel"
                type="tel"
                placeholder="(00) 00000-0000"
                ref={register}
                // tratar erro
              />
            </Form.Field>

            <Form.Group>
              <Form.Field>
                <label>CEP</label>
                <input
                  name="cep"
                  type="text"
                  placeholder="00000-000"
                  ref={register({
                    pattern: {
                      value: /^\d{5}\-\d{3}$/i,
                      message: 'Formato invalido!',
                    },
                  })}
                  // tratar erro
                />
              </Form.Field>

              <Form.Field>
                <label>Estado</label>
                <select name="state" ref={register}>
                  <optgroup label="Estados">
                    <option value="PR">Parana</option>
                    <option value="SP">São Paulo</option>
                    <option value="SC">Santa catarina</option>
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
                  ref={register}
                  // tratar erro
                />
              </Form.Field>
              <Form.Field>
                <label>Bairro</label>
                <input
                  name="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  ref={register}
                  // tratar erro
                />
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field>
                <label>Rua</label>
                <input
                  name="street"
                  type="text"
                  placeholder="Rua/Logradouro"
                  ref={register}
                  // tratar erro
                />
              </Form.Field>
              <Form.Field>
                <label>Número</label>
                <input
                  name="neighborhood"
                  type="number"
                  placeholder="S/N"
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
                <Icon name="checkmark" /> Tudo Certo!
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </>
  );
};

export default ChangeProfile;

//Acre (AC)
// Alagoas (AL)
// Amapá (AP)
// Amazonas (AM)
// Bahia (BA)
// Ceará (CE)
// Distrito Federal (DF)
// Espírito Santo (ES)
// Goiás (GO)
// Maranhão (MA)
// Mato Grosso (MT)
// Mato Grosso do Sul (MS)
// Minas Gerais (MG)
// Pará (PA)
// Paraíba (PB)
// Paraná (PR)
// Pernambuco (PE)
// Piauí (PI)
// Rio de Janeiro (RJ)
// Rio Grande do Norte (RN)
// Rio Grande do Sul (RS)
// Rondônia (RO)
// Roraima (RR)
// Santa Catarina (SC)
// São Paulo (SP)
// Sergipe (SE)
// Tocantins (TO)
