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
  StyledMenuMobile,
} from './styles';
import { Dropdown, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import Logo from '../../media/img/logotipo.png';
import UserDefault from '../../media/img/userDefault.png';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import { BsPeopleCircle } from 'react-icons/bs';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import Swal from 'sweetalert2';
// import axios from "axios";
import { setTimeout } from 'timers';

const TopBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const history = useHistory();
  const trigger = <StyledUser src={UserDefault} alt="user" />;

  const handleSubmit = () => {
    history.push(`/user-search/${value}`);
    // axios
    //  .get(`https://capstone-q2.herokuapp.com/product?=${value}`)
    //  .then((res) => {
    //    console.log('Buscou')
    //   })

    setTimeout(() => {
      setValue('');
    }, 1000);
  };

  if (window.innerWidth <= 500) {
    return (
      <StyledMenuMobile>
        <StyledMenuLeft>
          {visible ? (
            <TiTimes onClick={() => setVisible(false)} />
          ) : (
            <TiThMenu onClick={() => setVisible(true)} />
          )}
        </StyledMenuLeft>

        <StyledMenuCenter>
          <StyledLogo src={Logo} alt="logo" onClick={() => history.push('/')} />
        </StyledMenuCenter>

        <StyledMenuRight>
          <StyledButton onClick={() => history.push('/')}>Anunciar</StyledButton>
        </StyledMenuRight>
      </StyledMenuMobile>
    );
  }

  return (
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

      {window.localStorage.length > 0 ? (
        <StyledMenuRight>
          <StyledButton onClick={() => history.push('/')}>Anunciar</StyledButton>

          <StyledIcons>
            {window.localStorage.length > 0 ? (
              <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    icon="edit"
                    text="Alterar informações"
                    onClick={() => history.push('/register')}
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
                          window.localStorage.clear();
                        }
                      });
                    }}
                  />
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <BsPeopleCircle />
            )}

            <VscSettingsGear onClick={() => history.push('/')} />

            <AiOutlineHeart onClick={() => history.push('/')} />

            <AiOutlineMail onClick={() => history.push('/')} />

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
  );
};

export default TopBar;
