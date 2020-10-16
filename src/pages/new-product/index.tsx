import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { ResetButton, SendButton, ButtonsDiv, DeleteImg, Error, FormDiv } from './styles';
import { defaultProduct, formatNumber, categorias } from './helper';
import { FormContainer } from '../../components/form-container/styles';
import axios from 'axios';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { Product, TokenDecoded, Session, Data } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [estado, setEstado] = useState('Marcas de Uso');
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultProduct,
  });
  const token = useSelector((state: Session) => state.session.token);
  const user = useSelector(({ session }: RootState) => session.currentUser);
  const history = useHistory();

  console.log({ user });

  useEffect(() => {
    let es;
    switch (formValue.usability) {
      case '1':
        es = 'Com defeito';
        break;
      case '2':
        es = 'Bem Usado';
        break;
      case '3':
        es = 'Marcas de Uso';
        break;
      case '4':
        es = 'Semi Novo';
        break;
      case '5':
        es = 'Novo';
        break;
      default:
        es = 'Semi Novo';
        break;
    }
    setEstado(es);
  }, [formValue.usability]);

  useEffect(() => {
    if (formValue.images.length > 0) {
      setFormValue({ ...formValue, thumbnail: formValue.images[0] });
    }
  }, [formValue.images]);

  const onSubmit = (data: Data): void => {
    console.log({ data });
    const interestArr = data.interests.split(",").map(interest => interest.trim());
    const { boost, usability, value, name, description, category, subCategory, interests } = data;
    const sendData: Product = {
      owner: user.name,
      userId: user.id,
      views: 0,
      boostPlan: boost,
      usability: estado,
      value,
      name,
      description,
      subCategory,
      category,
      interests: interestArr,
      images: formValue.images,
      thumbnail: formValue.thumbnail,
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log({ sendData });
    axios
      .post('https://capstone-q2.herokuapp.com/products', sendData, headers)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Produto cadastrado.',
        });
        reset(defaultProduct);
        setFormValue(defaultProduct);
      })
      .catch(({ response }) => {
        if (response.data === "jwt expired") {
          Swal.fire({
            icon: 'info',
            title: 'Que pena',
            text: 'Sua sessão expirou',
          }).then(res => {
            if (res.isConfirmed) {
              history.push('/login');
              window.localStorage.clear();
            }
          });
        }
        else if (!!response) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Não foi possível enviar os dados.',
          });
          console.log(response);
          reset(defaultProduct);
          setFormValue(defaultProduct);
        }
      });
  };

  return (
    <FormContainer style={{ width: '100%', marginTop: 80 }}>
      <h1>Novo Produto</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Form.Field required>
            <label htmlFor="name">Produto</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome do Produto"
              ref={register({
                required: 'Nome necessário!',
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </Form.Field>

          <Form.Field>
            <label htmlFor="category">Categoria</label>
            <select
              defaultValue={[]}
              name="category"
              id="category"
              ref={register}
              placeholder="Escolha uma categoria">
              {categorias.map(({ key, value, text }) => (
                <option key={key} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </Form.Field>

          <Form.Field required>
            <label htmlFor="images">Imagens</label>
            <input
              type="file"
              name="images"
              id="images"
              accept="image/x-png,image/gif,image/jpeg"
              placeholder="Inserir imagem"
              multiple
              defaultValue={[]}
              onChange={({ target }): void =>
                setFormValue({
                  ...formValue,
                  images: [...formValue.images, target.value],
                })
              }
            />
            {formValue.images?.length < 1 && <Error>Insira ao menos uma imagem!</Error>}
            {formValue.images?.map((img: string, idx: number) => (
              <div key={idx} style={{ display: 'flex' }}>
                <p>
                  {img}&nbsp;
                  <DeleteImg
                    onClick={(): void =>
                      setFormValue({
                        ...formValue,
                        images: formValue.images.filter((_: string, i: number) => i !== idx),
                      })
                    }>
                    x
                  </DeleteImg>
                </p>
              </div>
            ))}
          </Form.Field>

          <Form.Field>
            <label htmlFor="usability">Estado de conservação</label>
            <input
              style={{ width: '75%' }}
              name="usability"
              id="usability"
              type="range"
              min={1}
              max={5}
              ref={register}
              onChange={({ target }): void => {
                setFormValue({ ...formValue, usability: target.value });
              }}
            />
            <div style={{ marginTop: -20, padding: 0 }}>{estado}</div>
          </Form.Field>

          <Form.Field>
            <label htmlFor="interests">
              Interesses para troca <em style={{ color: 'grey' }}>(opcional)</em>
            </label>
            <input
              type="text"
              id="interests"
              name="interests"
              placeholder="Interesses para troca, separados por vírgula"
              ref={register}
            />
          </Form.Field>

          <Form.Field required>
            <label htmlFor="description">Detalhes</label>
            <textarea
              name="description"
              id="description"
              rows={4}
              ref={register({
                required: 'Descreva seu produto.',
              })}
              placeholder="Detalhes como possíveis sinais de uso, &#10;
              manchas, partes faltantes ou estragadas, para que os &#10;
              visitantes saibam o que esperar do seu produto."
            />
            {errors.description && <Error>{errors.description.message}</Error>}
          </Form.Field>

          <Form.Field required>
            <label htmlFor="value">Valor de referência para Skambo</label>
            <input
              type="tel"
              name="value"
              id="value"
              placeholder="1,00"
              maxLength={11}
              ref={register({
                required: 'Informe o valor',
                validate: {
                  bigger: (value: string): boolean | string =>
                    parseInt(value.replace(/\D/g, ''), 10) > 100 || 'Valor mínimo: R$ 1,00',
                },
              })}
              onChange={({ target }): void =>
                setFormValue({
                  ...formValue,
                  value: formatNumber(target.value),
                })
              }
              value={formValue.value}
            />
            {errors.value && <Error>{errors.value.message}</Error>}
          </Form.Field>

          <Form.Field>
            <label htmlFor="boost">Plano de Impulsinamento</label>
            <select
              defaultValue="None"
              name="boost"
              id="boost"
              ref={register}
              placeholder="Plano de impulsionamento">
              <option value="None">Nenhum</option>
              <option value="Plan1">1 Semana = R$ 15,00</option>
              <option value="Plan2">2 Semanas = R$ 22,00</option>
              <option value="Plan3">1 Mês = R$ 30,00</option>
            </select>
          </Form.Field>
        </FormDiv>

        <Form.Field>
          <ButtonsDiv>
            <ResetButton
              type="reset"
              onClick={(): void => {
                reset();
                setFormValue(defaultProduct);
              }}>
              Limpar
            </ResetButton>
            <SendButton>Cadastrar</SendButton>
          </ButtonsDiv>
        </Form.Field>
      </Form>
    </FormContainer>
  );
};

export default NewProduct;
