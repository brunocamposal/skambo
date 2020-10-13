import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import * as Styled from './styles'

const EditModal = (saleId: any) => {
  const [open, setOpen] = useState(false)
  console.log(saleId)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Styled.EditButton>Editar</Styled.EditButton>}
    >
      <Modal.Header>Editar informações</Modal.Header>
      <Modal.Content image>

        <Modal.Description>
          <Header>Mude as informações desejadas</Header>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Confirmar Mudanças"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditModal