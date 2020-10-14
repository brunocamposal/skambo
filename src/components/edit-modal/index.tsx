import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Header, Input, Modal, Form } from 'semantic-ui-react'
import * as Styled from './styles'
import axios from 'axios'
interface stateProps {
  session: { token: string }
}

const EditModal = (saleId: any) => {
  const token = useSelector((state: stateProps) => state.session.token)
  const [values, setValues]: any = useState({
    name: "",
    category: "",
    usability: "",
    value: "",

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
      ...values
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
      <Modal.Header>Editar informaçõconstes</Modal.Header>
      <Modal.Content>

        <Modal.Description>
          <Header>Mude as informações desejadas</Header>
        </Modal.Description>

        <Form>
          <Form.Field>
            <label>Nome</label>
            <input onChange={(e) => (setValues({ ...values, name: e.target.value }))} value={values.name} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Categoria</label>
            <input onChange={(e) => (setValues({ ...values, category: e.target.value }))} value={values.category} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Condição</label>
            <input onChange={(e) => (setValues({ ...values, usability: e.target.value }))} value={values.usability} placeholder='' />
          </Form.Field>
          <Form.Field>
            <label>Valor aprox</label>
            <input onChange={(e) => (setValues({ ...values, value: e.target.value }))} value={values.value} placeholder='' />
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

          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditModal