import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
import Card from '../../components/card'
import { fetchUserSales, requestRemoveSale } from '../../redux/actions/user'
import { useDispatch } from 'react-redux'
import empty from '../../media/icons/empty.svg'
import Swal from 'sweetalert2'
import Lootie from 'react-lottie'
import animationData from '../../media/animations/10800-retail-exchange.json'
import { Table } from 'semantic-ui-react'

interface stateProps {
  session: { token: string }
}

const UserSales: React.FC = () => {
  const dispatch = useDispatch()
  const session = useSelector((state: stateProps) => state.session)
  const user = useSelector((state: { user: any }) => state.user)
  console.log(user)
  const decoded: { sub: string } = jwt_decode(session.token)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserSales("2", session.token))
    }, 1300)
  }, [])

  const handleRemove = (saleId: string) => {
    Swal.fire({
      title: 'Tem certeza que deseja deletar esse anúncio?',
      text: "Você não podera reverter essa ação!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(requestRemoveSale(saleId, session.token))
        Swal.fire(
          'Deletado!',
          'Seu anúncio foi deletado',
          'success'
        )
      }
    })
  }
  return (

    <Styled.Container>
      {Object.keys(user).length === 0 ?
        <Styled.LoadingContainer>
          <Lootie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </Styled.LoadingContainer>
        :
        <>
          {user?.userSales?.length > 0 ?
            <Styled.Table stackable>
              <Table.Body>
                <Table.Row >
                  <Table.Cell></Table.Cell>
                  <Table.Cell>Nome</Table.Cell>
                  <Table.Cell>Categoria</Table.Cell>
                  <Table.Cell>Condição</Table.Cell>
                  <Table.Cell>Valor aprox</Table.Cell>
                </Table.Row>
                {user.userSales && user.userSales.map((product: any) => {
                  return (
                    <Table.Row>
                      <Table.Cell><img src={product.thumbnail} alt="" /></Table.Cell>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell>{product.category[0]}</Table.Cell>
                      <Table.Cell>{product.usability}</Table.Cell>
                      <Table.Cell>R$ {product.value},00</Table.Cell>
                      <Table.Cell><Styled.EditButton>Alterar</Styled.EditButton> </Table.Cell>
                      <Table.Cell><Styled.RemoveButton onClick={() => { handleRemove(product.id) }}>Apagar</Styled.RemoveButton></Table.Cell>
                    </Table.Row>
                  )
                })}

              </Table.Body>
            </Styled.Table>
            :
            <Styled.Empty>
              <h2>Você ainda não tem nenhum anúncio!</h2>
              <img src={empty} />
            </Styled.Empty>}
        </>
      }

    </Styled.Container>
  )
}

export default UserSales