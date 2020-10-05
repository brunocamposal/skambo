import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55%;
  margin: 15vh auto;
  height: 553px;
  justify-self: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  @media (max-width: 1368px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 992px) {
    width: 93%;
  }

  @media (max-width: 768px) {
    width: 96%;
    flex-direction: column;
    height: 880px;
  }
  @media (max-width: 415px){
    width: 90%;
    height: 553px;
    box-shadow: 0px 0px 0px #ffffff;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 45%;
  height: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 35px;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 6px;
  }
  input {
    font-weight: 700;
    background-color: #f4f4f6;
    border: none;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    &::placeholder {
      opacity: 64%;
    }
  }


  @media (max-width: 768px) {
    width: 96%;
    h1 {
      margin-top: 40px;
    }
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  background-color: var(--primary);
  width: 55%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 96%;
    margin-top: 64px;
  }
  @media (max-width: 415px){
    display: none;
  }
  img {
    margin: 20px;
  }
`;
