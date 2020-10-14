<<<<<<< HEAD
import React from 'react';
import * as Styled from './styles';
import RegisterIcon from '../../media/icons/register-icon.svg';
import { useHistory } from 'react-router-dom';

const FormContainer = ({ props }: any) => {
  const history = useHistory();

=======
import React from "react";
import * as Styled from "./styles";
import RegisterIcon from "../../media/icons/register-icon.svg";

const FormContainer = ({props}: any) => {
>>>>>>> Dev
  return (
    <>
      <Styled.Container>
        <Styled.BoxContent>
          <Styled.LogoContainer>
<<<<<<< HEAD
            <img src={RegisterIcon} alt="Logotipo Skambo" />
=======
            <img src={RegisterIcon} alt='card' />
>>>>>>> Dev
          </Styled.LogoContainer>
          <Styled.FormContainer>{props}</Styled.FormContainer>
        </Styled.BoxContent>
      </Styled.Container>
    </>
  );
};

export default FormContainer;
