import React, { useState } from 'react';
import {
  StyledMenu,
  StyledMenuLeft,
  StyledMenuCenter,
  StyledMenuRight,
  StyledLogo,
  StyledSearch,
  StyledButton,
  StyledReverseButton,
  StyledIcons,
  StyledUser,
} from './styles';
import { Dropdown, Form, Modal } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import Logo from '../../media/img/logotipo.png';
import UserDefault from '../../media/img/userDefault.png';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import Swal from 'sweetalert2';
import { setTimeout } from 'timers';
import MobileCategories from '../mobile/categories';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';

import ChangeProfile from '../change-profile'

const TopBar: React.FC = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  const token = useSelector(({ session }: RootState) => session.token);

  // state para abrir o modal de info do user - edu
  const [openModalProfile, setOpenModalProfile] = useState(false);
  
  console.log(token);
  const trigger = <StyledUser src={UserDefault} alt="user" />;

  const handleSubmit = () => {
    history.push(`/user-search/${value}`);
    // axios
    //  .get(`https://capstone-q2.herokuapp.com/product?=${value}`)
    //  .then((res) => {
    //    console.log('Buscou')
    //   })
  };

  return (
    <>
      <Modal open={openModalProfile} size="large">
        <ChangeProfile setOpenClose={setOpenModalProfile} />
      </Modal>
      <MobileCategories />
      <StyledMenu>
        <StyledMenuLeft>
          <StyledLogo src={Logo} alt="logo" onClick={() => history.push('/')} />
        </StyledMenuLeft>

        <StyledMenuCenter>
          <Form onSubmit={handleSubmit}>
            <StyledSearch
              icon="search"
              iconPosition="left"
              placeholder="Buscar produtos para troca"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
              }}
            />
          </Form>
        </StyledMenuCenter>

        {token != '' ? ( // Condicional para quando o usuário estiver logado
          <StyledMenuRight>
            <StyledButton className="web" onClick={() => history.push('/')}>
              Anunciar
            </StyledButton>

            <StyledIcons>
              <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    icon="edit"
                    text="Alterar informações"
                    onClick={() => setOpenModalProfile(true)}
                    // onClick={() => history.push('/register')}
                  />

                  <Dropdown.Item
                    icon="sign-out"
                    text="Sair"
                    onClick={() => {
                      Swal.fire({
                        title: `Volte logo!`,
                        confirmButtonText: `Sair`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          document.location.reload();
                          window.localStorage.clear();
                        }
                      });
                    }}
                  />
                </Dropdown.Menu>
              </Dropdown>

              <VscSettingsGear className="web" onClick={() => history.push('/user')} />

              <AiOutlineHeart className="web" onClick={() => history.push('/user')} />

              <AiOutlineMail className="web" onClick={() => history.push('/')} />

              <HiOutlineShoppingBag onClick={() => history.push('/')} />
            </StyledIcons>
          </StyledMenuRight>
        ) : (
          <StyledMenuRight>
            <StyledButton onClick={() => history.push('/login')}>Entrar</StyledButton>
            <StyledReverseButton onClick={() => history.push('/register')}>
              Registrar-se
            </StyledReverseButton>
          </StyledMenuRight>
        )}
      </StyledMenu>
    </>
  );
};

export default TopBar;