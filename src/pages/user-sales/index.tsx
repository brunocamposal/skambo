import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { AiFillDelete, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FiPackage, FiSettings } from 'react-icons/fi';
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
import ChangeProfile from '../../components/change-profile';

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
  const [active, setActive] = useState('mySales');
  const dispatch = useDispatch();
  const session = useSelector((state: stateProps) => state.session);
  const currentUser = useSelector(({ session }: RootState) => session.currentUser);
  const user = useSelector((state: { user: any }) => state.user);
  const [userInfo, setUserInfo]: any = useState();
  const decoded: { sub: string } = jwt_decode(session.token);
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
        {active === 'mySales' ? (
          Object.keys(user).length === 0 ? (
            <Styled.LoadingContainer>
              <Lootie options={defaultOptions} height={200} width={200} />
            </Styled.LoadingContainer>
          ) : (
            <>
              <Styled.UserInfo>
                {currentUser.userImage !== undefined ? (
                  <img src={currentUser.userImage} />
                ) : (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAF8CAMAAAD7OfD4AAAA8FBMVEXCxsrDx8vEyMzFyMzFyc3Gys7Hys7Hy8/IzM/JzNDJzdDKzdHLztLLz9LMz9PN0NPN0dTO0dXP0tXP0tbQ09bQ1NfR1NjS1djS1tnT1tnU19rV2NvW2dzX2t3Y293Y297Z3N/a3N/a3eDb3uDc3uHc3+Ld4OLe4OPe4ePf4eTg4uTg4+Xh4+bi5Obi5efj5efk5ujk5unl5+nm6Orn6evo6uzp6+3q6+3q7O7r7e7s7e/s7vDt7/Dt7/Hu8PHv8PLv8fPw8vPx8vTx8/Ty9PXz9Pbz9fb09ff19vf19/j29/j3+Pn3+fr4+fr5+vv6+/wTf6ZOAAAIxElEQVQYGe3Bh0Ia2xoF4DU0NRrEjohiQ43RiOEg9i4qZdb7v8019SQ3JMckzMzv3uv7ICIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8vLlCqXKk2rtg2rlyUKhEEAikCpn8Elurlq7uOYXNxcHtVptufLZXGEMMlCp1VYeT0bXD+75xX2jOjsKiVZq5ZELwORui9+4v/iiXqvVVirzhQJk0CZuyJ306hWf4eKwtlouZCEDEbwJyeO1R/6Ox+PdxQLkL+WvSIb3/BNX9bVJyB+b6fLvhCdbM5A/UQo5AN3mcg7ymxZDDsrRcg7yG6ZCDtLRcg7yTEMPHLSDGciznDACl+UA8p9KjMbDegbya8Eto9LdHYL8yhwj1F0PID9XZ6SuZyA/1WLE/slAfpSbqGz/w8jdFSDfyZUbXcYkXIV8lVk/YawOUpCPhnY6jNtZFgJkaiETcD0MWXhkMlpj8Fy6ycQ8jsJrQ5dM0O0wPDba4vkFk3OVgbcmHhuT75iksxQ89fognz5ksurw1ASCUyZtBb6qM3HhJPy0QQPuc/DRFE04hIeCW9qwBP9UaURnBL7J9WjFEXyzQTsq8EvqkXbcp+GVMi3ZhlfqtCQchUeCNk1pwiPjNGYa/liiMSfwx05vh7bMwBuN0j5tOYM3yqkOjZmGL7JFWnMAb9RpTfgangjaNKcGT4zTnl4WflihQavwwz806Ap+uKNFE/BBhibtwwdTNKmdggeWaFMRHtikTXV4YJ82tVNwX5NGFeG+Kxq1B/c90qgWnJeiWXm4bphmrcF1YzSrAdcVaNYjXDdFu17DcdO0awmOK9KuPTiuSLtO4bgi7eoGcFuRhr2C26Zp2AzcNkXDKnDbFA3bgtvyNKwGt43SsAbcNkzDmnBbmoY14bge7TqG41q0qwnHndOuBhzXoF11OG6Pdu3Dceu0axeOK9KuDTjuFe1aguOCkGaV4LprmjUJ19Vp1jBct0arwgCum6FVt3BehlYdwn23NKoG99Vp1Arct0KjZuC+cRo1BPcFXZr0CB8c0aQj+KBKk7bhgymaVIIPgjYtGoYXmjSoBT8s06A6/JCnQcvwxD3tGYMn6jSnBV+Uac4efJENac0c/DBWKFzTmLB2cnG4MwG3jb/r0K4KXDYZ0rJwDO4KbmjbO7hrisZ1M3DWGq0rwVl1WrcJZx3Tum0465rWrcFZLVpXhLMeaVwnBWd1aNx7uKtD42bhrg5tawdwV4e27cNhd7StCIed0LReCg7bpmlNuGyWplXgslSHlo3AaXs0rAW3FWjYPhx3QbvKcNwy7RqC49KPtOoWzqvSqn/gvHSbRq3BfZs0ahbuS9/TpmF4oEaT2vBBlSadwgcLNGkPPhijSRV4oU2LXsMLhzToHn6o0qA6/JCnQWV4okVzehl44i3NacIX4zSnDG/c0JhOCt7YoDH78MdQSFvG4ZEGTTmBT6Zpyhy8ck5DruGXEg1ZhGcuacZ9AM/M0owyvNOkEafwz0ibJoTj8FCJyTpr8YNteGmpR/L+kglZSq/fMNwJ4KfhtdpS+i0TkgeQgt8qTEY3gMwwGYcQDDEZVQjwwERMQoAjJqEbQIA3TEIT8mSOSahCnqRDJqAA+eCU8WsHkA+qjF8D8lGe8StDPrlj3MIs5JNNxu0U8tkrxq0K+eKYMRuDfLHIeF1Cvkq3Gat1yL+2GKdwBPKvXJcxOoV8a4cxqkC+NdxlbLoZyHeqjM0e5Hupe8YlD/k/ZcbkFPKDU8ZjAfKD8ZBxaAWQH+0xDkuQPrJtRu82gPSzzuiVIX0NMXI3AaQ/Rm4D8hOM3CqkvzQjtwjpL8vIlSD9jTByRUh/o4zcDKS/PCM3BelvipHLQ/orMnJ5SH9lRi4P6a/CyOUh/a0zcqOQ/t4wcnlIf7uMXB7SX52Ry0P6O2DkpiD9nTJyc5D+rhi5EqS/e0ZuFdJfl5HbhvQVMHp1SF85Ru8G0k+mxhhMQ3608MBYHE9Cvjd6xNgcTUD+FWz2GKfmGOSzmRvGrLceQJ6kdpmA8zEIJm6YiHAjgOeCNyGTcpyF115fMUG3o/BYqctEPY7CW1UmrTUMT1WZvOscvDRPC87T8NBImyYcp+Cd7CWNOB+CZ15f04zWOHwSrPVoSLiVgjfmrmnMzQz8MHdGg+pZOC9YuKBNnd1ROC238UDDDufgrMl6SONuVzNwUGrpki9B9/00HDPyts0X427rFZwRlJp8YU4WM3DBZK3DF6hXn8ULN7J5xxfr/s0YXqzM0glfuLNKFi9Rsd6jA8JGES9M/u0DnfHwNo8XY2jtko65WMnhBcgsHtJF4cF8ANOC+UaPznp8V4BZs/sdOu5qbQgGFd4+0AvNUgBTRjdv6Y92bRJWDK2d0zc31WEkL7N4SD8dlVNIUjDfCOmvzvtpJGXyXZu+u9t8hfgNb95QPjhZTCNOmaUTylfd+iziMtvoUb53vzWG6A1v3VP6OatkEKWgdET5qV6jiKjkd9uUX3vYzmPw0pULynNcrGQxUKO7HcpzhQfzAQZl7pDyex53ChiAzOot5Q9creXwd/K1LuUPhQfz+HOFBuWv3CwG+COTh5S/1lrC75s7owzExQR+T+mCMjDvh/B84yeUQWrP45mye5RB2w3wHHOPlMG7eIX/lNqlRKI7i/8wckmJSDiPX8o/UCITlvELc11KhMJF/NRcSInWMn5iqkeJWDiPvgodSuS6efSRa1FicJfBD4IjSizq+MEbSkxK+D8TISUm7Sy+E1xTYrOH72xR4hPm8Y3hLiVGDXxjnxKr1/gqH1Ji9R5f1Snx6mXx2UhIidkKPntLids5Pkm1KbEbxUcLlPht4aMjSvzu8MFwSElAHk+WKUmo4kmTkoQrAKkeJREjQJGSjAqwQ0lGHbiiJOMBmZCSEMxSkoINSlJwQEkK7ihJQUhJCiiJASUxoCQGlMSAkhhQEgNKYkBJDCiJASUxoCQGlMT8D+Y/p4ThF2pHAAAAAElFTkSuQmCC" />
                )}
                <strong>{currentUser.name !== undefined ? currentUser.name : 'Skambista'}</strong>
                <section>
                  <div>
                    <AiOutlineHome /> Curitiba/PR
                  </div>
                  <div>
                    {' '}
                    <FiPackage /> {currentUser.trades !== undefined ? currentUser.trades : 0} Trocas
                  </div>
                </section>
                <Styled.ProfileButtonActive onClick={() => setActive('mySales')}>
                  <AiOutlineUser/> Meus Anúncios
                </Styled.ProfileButtonActive>
                <Styled.SettingsButton onClick={() => setActive('settings')}>
                <FiSettings/>  Alterar informações
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
                              <Table.Cell>{product.category}</Table.Cell>
                              <Table.Cell>{product.usability}</Table.Cell>
                              <Table.Cell>R$ {product.value}</Table.Cell>
                              <Table.Cell>
                                <EditModal saleId={product.id} />
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
          )
        ) : (
          <>
            <Styled.UserInfo>
              {currentUser.userImage !== undefined ? (
                <img src={currentUser.userImage} />
              ) : (
                <img src="data:image/png;base64,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" />
              )}
              <strong>{currentUser.name !== undefined ? currentUser.name : 'Skambista'}</strong>
              <section>
                <div>
                  {' '}
                  <AiOutlineHome /> Curitiba/PR
                </div>
                <div>
                  {' '}
                  <FiPackage /> {currentUser.trades !== undefined ? currentUser.trades : 0} Trocas
                </div>
              </section>
              <Styled.ProfileButton onClick={() => setActive('mySales')}>
              <AiOutlineUser/>  Meus Anúncios
              </Styled.ProfileButton>
              <Styled.SettingsButtonActive onClick={() => setActive('settings')}>
                <FiSettings/> Alterar informações
              </Styled.SettingsButtonActive>
            </Styled.UserInfo>

            <ChangeProfile />
          </>
        )}
      </Styled.Container>
    </LayoutContainer>
  );
};

export default UserSales;
