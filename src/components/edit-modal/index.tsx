import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Header, Input, Modal, Form, Select } from 'semantic-ui-react'
import * as Styled from './styles'
import axios from 'axios'
import { changeProductInfo as changeProductInfoAction } from '../../redux/actions/user'
// import CurrencyInput from 'react-currency-masked-input'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

interface stateProps {
  session: { token: string }
}

const categoryOptions = [
  { key: 1, value: 'Vestuarios', text: 'Vestuário' },
  { key: 2, value: 'Bicicletas', text: 'Bicicletas' },
  { key: 3, value: 'Esportes', text: 'Esportes' },
  { key: 4, value: 'Instrumentos_Musicais', text: 'Instrumentos Musicais' },
  { key: 5, value: 'Jogos', text: 'Jogos' },
  { key: 6, value: 'Livros', text: 'Livros' },
  { key: 7, value: 'Moveis', text: 'Móveis' },
  { key: 8, value: 'Outros', text: 'Outros' },
  { key: 9, value: 'Eletrônicos', text: 'Eletrônicos' }
]

const numberMask = createNumberMask({
  prefix: 'R$ ',
  suffix: '',
  decimalSymbol: ',',
  allowDecimal: true,
  decimalLimit: 2,
  thousandsSeparatorSymbol: '.',
  allowNegative: false,
  allowLeadingZeroes: false,
})

const EditModal = (saleId: any) => {
  const dispatch = useDispatch()
  const token = useSelector((state: stateProps) => state.session.token)
  const [values, setValues]: any = useState({
    name: "",
    category: "",
    usability: "",
    value: "",
    thumbnail: ""
  })
  const [open, setOpen] = useState(false)
  const id = saleId.saleId
  const getProductInfo = () => {
    const url = `https://capstone-q2.herokuapp.com/products/${id}`
    axios.get(url)
      .then((res) => setValues(res.data))
      .catch(err => console.log(err))
  }

  const changeProductInfo = () => {

    axios.patch(`https://capstone-q2.herokuapp.com/products/${id}`, {
      ...values,
      value: values.value.replace(/[^0-9,]/g, "")
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => {
        getProductInfo()
        setOpen(true)
      }
      }
      open={open}
      trigger={<Styled.EditButton>Editar</Styled.EditButton>}
    >
      <Modal.Header>Editar informações</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Nome</label>
            <input onChange={(e) => (setValues({ ...values, name: e.target.value }))} value={values.name} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Imagem</label>
            <input onChange={(e) => (setValues({ ...values, thumbnail: e.target.value }))} value={values.thumbnail} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Categoria</label>
            <Select
              value={values.category}
              options={categoryOptions}
              onChange={(e, { value }) => setValues({ ...values, category: value })}
            />

          </Form.Field>
          <Form.Field>
            <label>Condição</label>
            <input onChange={(e) => (setValues({ ...values, usability: e.target.value }))} value={values.usability} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Valor aprox</label>
            <MaskedInput
              onChange={(e: any) => (
                setValues({ ...values, value: e.target.value })
              )} value={values.value}
              mask={numberMask}
            />
          </Form.Field>
        </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Confirmar Mudanças"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {

            setOpen(false)
            changeProductInfo()
            dispatch(changeProductInfoAction(saleId, {
              ...values,
              value: values.value.replace(/[^0-9,]/g, "")
            }))

          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditModal