import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledMenu = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  background: #ffffff;
  padding-top: 15px;

  @media (max-width: 480px) {
    height: 100px;
    position: relative;
  }
`;

export const StyledMenuLeft = styled.div`
  width: 15%;
  min-width: 123px;

  @media (max-width: 480px) {
    width: 40%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMenuCenter = styled.div`
  width: 55%;

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 50px;
    left: 0;
  }
`;

export const StyledMenuRight = styled.div`
  width: 25%;
  font-size: 27px;
  display: flex;

  @media (max-width: 880px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 30%;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;

    .web {
      display: none;
    }
  }
`;

export const StyledIcons = styled.div`
  margin: 10px 12px;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 880px) {
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
   margin: 10px 15px;
  }
`;

export const StyledLogo = styled.img`
  width: 180px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 120px;
    margin-top: 0;
  }
`;

export const StyledSearch = styled(Input)`
  width: 70%;
  top: 12px;
  left: 70px;
  cursor: pointer;

  input {
    background: #F4F4F6 !important;
    color: var(--primary-dark) !important;
    border-radius: 30px !important;
    border: 1px solid darkgrey !important;
  }

  @media (max-width: 700px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 5px;
  }
`;

export const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  margin-top: 8px;
  background: var(--primary);
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1000px) {
    margin-left: 20px;
  }

  @media (max-width: 880px) {
    width: 60px;
    height: 30px;
    margin-top: 15px;
    margin-left: 0px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    margin: 0;
    width: 100px;
  }
`;

export const StyledReverseButton = styled(StyledButton)`
  margin-left: 5px;
  color: var(--primary);
  background: #ffffff;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const StyledUser = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: 1px solid black;
  cursor: pointer;

  @media (max-width: 880px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

