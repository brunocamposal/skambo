import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Container, Form, Textarea } from './styles';

const NewProduct: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [outros, setOutros] = useState(false);
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  const categorias: object = {
    Eletronicos: 'Eletrônicos',
    Escritorio: 'Escritório',
    Esportes: 'Esportes',
    Instrumentos_Musicais: 'Instrumentos Musicais',
    Jogos: 'Jogos',
    Lazer: 'Lazer',
    Livros: 'Livros',
    Moveis: 'Móveis',
    Saude: 'Saúde',
    Servicos: 'Serviços',
    Vestuario: 'Vestuário',
  };

  return (
    <>
      <Link to="/">
        <h3 style={{ marginLeft: '30px' }}> Voltar </h3>
      </Link>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <div>Produto</div>
            <input
              type="text"
              name="product-name"
              ref={register({ required: true, maxLength: 48 })}
            />
          </label>
          <label>
            <div>Categoria</div>
            <select name="category" ref={register({ required: true })}>
              {Object.entries(categorias).map(([key, val], k) => (
                <option key={k} value={key} onSelect={() => setOutros(false)}>
                  {val}
                </option>
              ))}
              <option value="Outros" onSelect={() => setOutros(true)}>
                Outros
              </option>
            </select>
            {outros && (
              <input
                type="text"
                placeholder="Nova categoria"
                name="newCategory"
                ref={register({ required: true, maxLength: 18 })}
              />
            )}
          </label>
          <label>
            <div>Estado de conservação</div>
            <input
              type="range"
              name="aspect"
              id="aspect"
              ref={register({ required: true, max: 5, min: 1 })}
            />
          </label>
          <label>
            <div>Detalhes</div>
            <Textarea
              name="details"
              ref={register({ required: true })}
              placeholder="Informe sobre possíveis sinais de uso como &#10;
              manchas, partes faltantes / estragadas, etc, para que os &#10;
              visitantes saibam exatamente o que esperar do seu produto."
            />
            <input
              type="number"
              name="valueSkambo"
              ref={register({ required: true, max: 10000, min: 0 })}
            />
          </label>
          <input type="submit" />
        </Form>
      </Container>
    </>
  );
};

export default NewProduct;
