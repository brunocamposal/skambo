import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
import Card from '../../components/card'
import { fetchUserSales, requestRemoveSale } from '../../redux/actions/user'
import { useDispatch } from 'react-redux'
import empty from '../../media/icons/empty.svg'

interface stateProps {
  session: { token: string }
}

const UserSales: React.FC = () => {
  const dispatch = useDispatch()
  const session = useSelector((state: stateProps) => state.session)
  const user = useSelector((state: { user: any }) => state.user)

  const decoded: { sub: string } = jwt_decode(session.token)
  console.log('%c Usefull information', 'color:orange; font-weight:bold')
  console.log('decoded', decoded)
  console.log(session.token)

  useSelector((state: any) => state.user)

  useEffect(() => {
    dispatch(fetchUserSales(decoded.sub, session.token))


  }, [])

  const handleRemove = (saleId: string) => {
    console.log(saleId)
    dispatch(requestRemoveSale(saleId, session.token))
  }

  return (
    <Styled.Container>
      {user?.userSales?.length > 0 ? user.userSales.map((product: any, key: number) =>
        (<Styled.CardWrapper key={key}>
          <Card

            category={product.category}
            imgUrl={product.thumbnail}
            title={product.name}

          />
          <Styled.Button onClick={() => { handleRemove(product.id) }}>Remover</Styled.Button>
        </Styled.CardWrapper>
        )
      ) :
        <Styled.Empty>
          <h2>Você ainda não tem nenhum anúncio!</h2>
          <img src={empty} />
        </Styled.Empty>}
    </Styled.Container>
  )
}

export default UserSales