import React, { useState } from "react";
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
} from "./styles";
import { Dropdown, Form } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import Logo from "../../media/img/logotipo.png"
import UserDefault from '../../media/img/userDefault.png'
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { VscSettingsGear } from 'react-icons/vsc'
import Swal from 'sweetalert2';
// import axios from "axios";
import { setTimeout } from "timers";
import MobileCategories from '../mobile/categories'

const TopBar: React.FC = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  const trigger = <StyledUser src={UserDefault} alt='user' />

  const handleSubmit = () => {
    
    history.push(`/user-search/${value}`)
    // axios
    //  .get(`https://capstone-q2.herokuapp.com/product?=${value}`)
    //  .then((res) => {
    //    console.log('Buscou')
    //   })

    setTimeout(() => {
      setValue('')
    }, 1000)
  }

  return (
    <>
    {window.innerWidth < 501 && <MobileCategories />}
    <StyledMenu>
      <StyledMenuLeft>
        <StyledLogo src={Logo} alt="logo" onClick={() => history.push('/')} />
      </StyledMenuLeft>
      
      <StyledMenuCenter>
        <Form onSubmit={handleSubmit}>
          <StyledSearch
            icon='search'
            iconPosition='left'
            placeholder='Buscar produtos para troca'
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value)
            }}
          />
        </Form>
      </StyledMenuCenter>
      
      {window.localStorage.length >= 0 ? // Condicional para quando o usuário estiver logado
      <StyledMenuRight>

        
        {window.innerWidth > 500 && // Condicional para só aparecer na tela Web
        <StyledButton onClick={() => history.push('/')}>Anunciar</StyledButton>}
        
        {window.innerWidth > 500 ? // Condicional para o que mostrar entre Web e Mobile, resposividade nesse caso só pega se já abrir no mobile
        <StyledIcons>
          <Dropdown trigger={trigger} icon={null}>
            <Dropdown.Menu>
            <Dropdown.Item
                      icon="edit"
                      text="Alterar informações"
                      onClick={() => history.push('/register')}
                    />
              <Dropdown.Item icon="sign-out" text="Sair" onClick={() => {
                        Swal.fire({
                          title: `Volte logo!`,
                          confirmButtonText: `Sair`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            window.localStorage.clear();
                          }
                        });
                      }} />
            </Dropdown.Menu>
          </Dropdown>
        
          <VscSettingsGear onClick={() => history.push('/')} />
        
          <AiOutlineHeart onClick={() => history.push('/')} />
        
          <AiOutlineMail onClick={() => history.push('/')} />
        
          <HiOutlineShoppingBag onClick={() => history.push('/')} />
        
        </StyledIcons>
        :
        <StyledIcons>
          <Dropdown trigger={trigger} icon={null}>
            <Dropdown.Menu>
            <Dropdown.Item
                      icon="edit"
                      text="Alterar informações"
                      onClick={() => history.push('/register')}
                    />
              <Dropdown.Item icon="sign-out" text="Sair" onClick={() => {
                        Swal.fire({
                          title: `Volte logo!`,
                          confirmButtonText: `Sair`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            window.localStorage.clear();
                          }
                        });
                      }} />
            </Dropdown.Menu>
          </Dropdown>
        
          <HiOutlineShoppingBag onClick={() => history.push('/')} />
        
        </StyledIcons>}
      
      </StyledMenuRight>      
      :
      
      <StyledMenuRight>
        <StyledButton onClick={() => history.push('/login')}>Entrar</StyledButton>
        <StyledReverseButton onClick={() => history.push('/register')}>Registrar-se</StyledReverseButton>
      </StyledMenuRight>}
    </StyledMenu>
    </>
  );
};

export default TopBar;
