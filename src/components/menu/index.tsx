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
import { useHistory } from "react-router-dom"
import Logo from "../../assets/img/logo.jpg"
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { VscSettingsGear } from 'react-icons/vsc'
import { BsPeopleCircle } from 'react-icons/bs'

const TopBar = () => {
  const [isLogged, setIsLogged] = useState(true)
  const history = useHistory()

  return (
    <StyledMenu>
      <StyledMenuLeft>
        <StyledLogo src={Logo} alt="logo" onClick={() => history.push('/')} />
      </StyledMenuLeft>
      
      <StyledMenuCenter>
        <StyledSearch input={{ icon: 'search', iconPosition: 'left' }} placeholder="Buscar produtos para troca" />
      </StyledMenuCenter>
      
      {isLogged ?
      <StyledMenuRight>
        <StyledButton onClick={() => history.push('/register-product')}>Anunciar</StyledButton>
        <StyledIcons>
          {!isLogged ? <StyledUser src={Logo} alt='user' /> : <BsPeopleCircle />}
          <VscSettingsGear />
          <AiOutlineHeart />
          <AiOutlineMail />
          <HiOutlineShoppingBag />
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
