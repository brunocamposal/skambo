import React from "react";
import { Link } from "react-router-dom";
import MobileCategories from "../mobile/categories";
import { Container } from "./styles";

  return (
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
      
      {isLogged ?
      <StyledMenuRight>
        <StyledButton onClick={() => history.push('/')}>Anunciar</StyledButton>
        
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
