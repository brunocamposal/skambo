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

interface stateProps {
  session: { token: string }
}

const UserSales: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  // const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const session = useSelector((state: stateProps) => state.session)
  const user = useSelector((state: { user: any }) => state.user)
  console.log('user', user)
  const decoded: { sub: string } = jwt_decode(session.token)
  // console.log('%c Usefull information', 'color:orange; font-weight:bold')
  // console.log('decoded', decoded)
  // console.log(session.token)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useSelector((state: any) => state.user)

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserSales(decoded.sub, session.token))
    }, 1500)


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
          {user?.userSales?.length > 0 ? user.userSales.map((product: any, key: number) =>
            (<Styled.CardWrapper key={key}>
              <Card

                category={product.category}
                imgUrl={product.thumbnail}
                title={product.name}

              />
              <Styled.ButtonsWrapper>
                <Styled.RemoveButton onClick={() => {
                  handleRemove(product.id)
                }}><AiFillDelete /> Remover
          </Styled.RemoveButton>
                <Styled.EditButton>
                  <MdModeEdit /> Editar
          </Styled.EditButton>
              </Styled.ButtonsWrapper>
            </Styled.CardWrapper>
            )
          ) :
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