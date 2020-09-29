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
  StyledUser
} from "./styles";
import {Dropdown} from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { VscSettingsGear } from 'react-icons/vsc'
import { BsPeopleCircle } from 'react-icons/bs'
import Swal from 'sweetalert2';
// import axios from "axios";

const TopBar = () => {
  const [isLogged, setIsLogged] = useState(true)
  const history = useHistory()

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   axios
  //     .get(`https://capstone-q2.herokuapp.com`)
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }

  const trigger = <StyledUser src={Logo} alt='user' />

  return (
    <StyledMenu>
      <StyledMenuLeft>
        <StyledLogo src={Logo} alt="logo" onClick={() => history.push('/')} />
      </StyledMenuLeft>
      
      <StyledMenuCenter>
        <StyledSearch 
          input={{ icon: 'search', iconPosition: 'left' }}
          placeholder="Buscar produtos para troca"
          
        />
      </StyledMenuCenter>
      
      {isLogged ?
      <StyledMenuRight>
        <StyledButton onClick={() => history.push('/register-product')}>Anunciar</StyledButton>
        
        <StyledIcons>
        
          {isLogged ?
          (<Dropdown trigger={trigger} icon={null}>
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
          </Dropdown>) 
          :
          (<BsPeopleCircle />)}
        
          <VscSettingsGear onClick={() => history.push('/')} />
        
          <AiOutlineHeart onClick={() => history.push('/')} />
        
          <AiOutlineMail onClick={() => history.push('/')} />
        
          <HiOutlineShoppingBag onClick={() => history.push('/')} />
        
        </StyledIcons>
      
      </StyledMenuRight>      
      :
      
      <StyledMenuRight>
        <StyledButton onClick={() => history.push('/login')}>Entrar</StyledButton>
        <StyledReverseButton onClick={() => history.push('/register')}>Registrar-se</StyledReverseButton>
      </StyledMenuRight>}
    </StyledMenu>
  );
};

export default TopBar;
