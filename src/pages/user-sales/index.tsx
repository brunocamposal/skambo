import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import Card from '../../components/card';
import { fetchUserSales, requestRemoveSale } from '../../redux/actions/user';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import empty from '../../media/icons/empty.svg';
import Swal from 'sweetalert2';
import Lootie from 'react-lottie';
import animationData from '../../media/animations/10800-retail-exchange.json';
import { Table } from 'semantic-ui-react';

import { Container as LayoutContainer } from '../../components/layout/styles';
import Menu from '../../components/menu';
import EditModal from '../../components/edit-modal';
import axios from 'axios';
interface stateProps {
  session: { token: string };
}

interface productProps {
  name: string;
  category: string;
  usability: string;
  value: string;
  id: number;
  thumbnail: string;
}
const UserSales: React.FC = () => {
  const dispatch = useDispatch()
  const session = useSelector((state: stateProps) => state.session)
  const user = useSelector((state: { user: any }) => state.user)
  const [userInfo, setUserInfo]: any = useState()
  const decoded: { sub: string } = jwt_decode(session.token)
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserSales(decoded.sub, session.token));
    }, 1300);
  }, []);

  const handleRemove = (saleId: string) => {
    Swal.fire({
      title: 'Tem certeza que deseja deletar esse anúncio?',
      text: 'Você não podera reverter essa ação!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(requestRemoveSale(saleId, session.token));
        Swal.fire('Deletado!', 'Seu anúncio foi deletado', 'success');
      }
    });
  };
  return (
    <LayoutContainer>
      <Menu></Menu>
      <Styled.Container>
        {Object.keys(user).length === 0 ? (
          <Styled.LoadingContainer>
            <Lootie options={defaultOptions} height={200} width={200} />
          </Styled.LoadingContainer>
        ) : (
          <>
            <Styled.UserInfo>
              {userInfo?.userImage !== undefined ?
                <img src={userInfo.userImage} />
                :
                <img src="https://avatars1.githubusercontent.com/u/68689560?s=400&v=4" />

              }
              <strong>
                {userInfo?.name !== undefined ?
                  userInfo.name
                  :
                  "Skambista"
                }
              </strong>
              <section>
                <div>Curitiba/PR</div>
                <div>0 Trocas</div>
              </section>
              <Styled.ProfileButton>Meus Anúncios</Styled.ProfileButton>
              <Styled.SettingsButton onClick={() => history.push('/change-profile')}>
              Alterar informações
              </Styled.SettingsButton>
            </Styled.UserInfo>
            {user?.userSales?.length > 0 ? (
              <Styled.TableContainer>
                <Styled.Table unstackable>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>
                        <strong>Nome</strong>
                      </Table.Cell>
                      <Table.Cell>
                        <strong>Categoria</strong>
                      </Table.Cell>
                      <Table.Cell>
                        <strong>Condição</strong>
                      </Table.Cell>
                      <Table.Cell>
                        <strong>Valor aprox</strong>
                      </Table.Cell>
                      <Table.Cell>
                        <strong></strong>
                      </Table.Cell>
                    </Table.Row>
                    {user.userSales &&
                      user.userSales.map((product: any) => {
                        return (
                          <Table.Row>
                            <Table.Cell>
                              <img src={product.thumbnail} alt="" />
                            </Table.Cell>
                            <Table.Cell>{product.name}</Table.Cell>
                            <Table.Cell>{product.category[0]}</Table.Cell>
                            <Table.Cell>{product.usability}</Table.Cell>
                            <Table.Cell>R$ {product.value},00</Table.Cell>
                            <Table.Cell>
                              {' '}
                              <EditModal saleId={product.id} />{' '}
                            </Table.Cell>
                            <Table.Cell>
                              <Styled.RemoveButton
                                onClick={() => {
                                  handleRemove(product.id);
                                }}>
                                Apagar
                              </Styled.RemoveButton>
                            </Table.Cell>
                          </Table.Row>
                        );
                      })}
                  </Table.Body>
                </Styled.Table>
              </Styled.TableContainer>
            ) : (
              <Styled.Empty>
                <h2>Você ainda não tem nenhum anúncio!</h2>
                <img src={empty} />
              </Styled.Empty>
            )}
          </>
        )}
      </Styled.Container>
    </LayoutContainer>
  );
};

export default UserSales;
