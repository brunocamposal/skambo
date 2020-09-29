import styled from "styled-components";

export const BoxContent = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  width: 55%;
  margin: 0 auto;
  width: 52%;
  height:553px;
  justify-self:center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  @media (max-width:1368px) {
    width:60%;
  }

  @media (max-width: 1200px) { 
    width:75%;
  }
  @media (max-width: 992px) {
    width:93%;
  }
  @media (max-width: 768px) { 
    width:96%;
    flex-direction:column
    
   }
`;

export const FormContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #FFF;
  width:45%;
  height: 100%;
  justify-content: center;
    align-items: center;

    h1 {
    margin-bottom: 35px;
    }

   label {
     font-weight:700;
     font-size: 14px;
     margin-bottom:6px;
   }
   input {
    font-weight:700;
     background-color: #F4F4F6;
     border:none;
     padding:10px;
     border-radius:4px;
     margin-bottom:16px;
     &::placeholder {
      opacity:64%;
     }
   }

    @media (max-width: 768px) { 
    width:96%;
    h1 {
      margin-top:30px;
    }
   }
`

export const LogoContainer = styled.div`
  display:flex;
  background-color: #8D70FB;
  width:55%;
  height: 100%;
  justify-content: center;
    align-items: center;
    @media (max-width: 768px) { 
    width:96%;
        margin-top: 64px;
   }
`

export const FieldWrapper = styled.div`
  display:flex;
  flex-direction:column;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#F5F5F5;
`;

export const Button = styled.button`
  font-weight:700;
  margin-top:54px;
  color:#fff;
  background-color:#8D70FB;
  border-radius:7px;
  height:35px;
  width:293px;
`;

export const LinkWrapper = styled.div`
  h3 {
    width:287px;
    height:45px;
    text-align:center;
    margin-top:14px;
    font-size:14px;
  }
`;

export const Error = styled.div`
  color:#f40909;

`;
