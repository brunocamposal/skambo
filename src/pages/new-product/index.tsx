import axios from 'axios';
import React, { useState, useEffect, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { FormContainer } from '../../components/form-container/styles';
import { RootState } from '../../redux/reducers';
import { defaultProduct, formatNumber, subcategorias } from './helper';
import { ResetButton, SendButton, ButtonsDiv, DeleteImg, Error, FormDiv } from './styles';
import { Product, Session, Data } from './types';

const NewProduct: React.FC = () => {
  const [formValue, setFormValue] = useState(defaultProduct);
  const [estado, setEstado] = useState('Marcas de Uso');
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultProduct,
  });
  const token = useSelector((state: Session) => state.session.token);
  const userId = useSelector(({ session }: RootState) => session.currentUser.id);
  const [category, setCategory] = useState<SetStateAction<string>>();
  const history = useHistory();

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
        es = 'Marcas de Uso';
        break;
    }
    setEstado(es);
  }, [formValue.usability]);

  useEffect(() => {
    if (formValue.images.length > 0) {
      setFormValue({ ...formValue, thumbnail: formValue.images[0] });
    }
  }, [formValue.images]);
  useEffect(() => {
    if (formValue.subCategory !== '') {
      const cat = subcategorias.find((subcat) => {
        return subcat.content.includes(formValue.subCategory);
      });
      setCategory(cat.name);
    }
  }, [formValue.subCategory]);

  const onSubmit = (data: Data): void => {
    const interestArr: string[] = data.interests
      .split(',')
      .map((interest: string) => interest.trim());

    const { boost, value, name, description, subCategory } = data;

    const sendData: Product = {
      userId,
      views: 0,
      boostPlan: boost,
      usability: estado,
      value,
      name,
      description,
      subCategory,
      category,
      interests: interestArr,
      images: formValue.images.map((_: string) => 'http://picsum.photos/400/400'),
      thumbnail: 'http://picsum.photos/400/400',
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
        if (response.data === 'jwt expired') {
          Swal.fire({
            icon: 'info',
            title: 'Que pena',
            text: 'Sua sessão expirou',
          }).then((res) => {
            if (res.isConfirmed) {
              history.push('/login');
              window.localStorage.clear();
            }
          });
        } else if (response) {
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

          <Form.Field required>
            <label htmlFor="category">Categoria</label>
            <select
              onChange={({ target }) => setFormValue({ ...formValue, subCategory: target.value })}
              name="subCategory"
              id="subCategory"
              ref={register({ required: 'Escolha uma categoria!' })}
              placeholder="Escolha uma categoria">
              {subcategorias.map(({ name, content }) => (
                <optgroup label={name} key={name}>
                  {content.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.category && <Error>{errors.category.message}</Error>}
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
