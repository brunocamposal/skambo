import React from "react";
import * as Styled from "./styles";
import RegisterIcon from "../../media/icons/register-icon.svg";
import { useHistory } from "react-router-dom";

const FormContainer = ({props}: any) => {
  const history = useHistory();

  return (
    <>
      <Styled.Container>
        <a onClick={() => history.push("/")}>Voltar</a>
        <Styled.BoxContent>
          <Styled.LogoContainer>
            <img src={RegisterIcon} />
          </Styled.LogoContainer>
          <Styled.FormContainer>{props}</Styled.FormContainer>
        </Styled.BoxContent>
      </Styled.Container>
    </>
  );
};

export default FormContainer;
