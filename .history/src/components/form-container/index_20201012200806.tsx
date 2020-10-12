import React from "react";
import * as Styled from "./styles";
import RegisterIcon from "../../media/icons/register-icon.svg";

const FormContainer = ({props}: any) => {
  return (
    <>
      <Styled.Container>
        <Styled.BoxContent>
          <Styled.LogoContainer>
            <img src={RegisterIcon} alt='card' />
          </Styled.LogoContainer>
          <Styled.FormContainer>{props}</Styled.FormContainer>
        </Styled.BoxContent>
      </Styled.Container>
    </>
  );
};

export default FormContainer;
