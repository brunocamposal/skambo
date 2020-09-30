import styled from 'styled-components';
import { Input } from 'semantic-ui-react'

export const StyledMenu = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  margin-bottom: 150px;
`;

export const StyledMenuLeft = styled.div`
  width: 20%;

  @media (max-width: 500px) {
    width: 20%;
    display: flex;
    align-items: center;
    font-size: 30px;
  }  
`;

export const StyledMenuCenter = styled.div`
  width: 40%;

  @media (max-width: 500px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMenuRight = styled.div`
  width: 40%;
  font-size: 32px;
  display: flex;

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledIcons = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 30%;
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  
  @media (max-width: 1300px) {
    margin-top: 20px;
  }
`

export const StyledLogo = styled.img`
  height: 50px;
  margin-top: 5px;
  margin-left: 20%;

  @media (max-width: 1000px) {
    margin-left: 5%;
    height: 40px;
    margin-top: 5px;
  }

  @media (max-width: 500px) {
    margin: 0;
    height: 40px;
  }
`;

export const StyledSearch = styled(Input)`
  width: 80%;
  top: 10px;
  left: 5px;
  cursor: pointer;

  input {
    background: var(--input-color) !important;
    color: darkgrey !important;
    border-radius: 30px !important;
    border: 1px solid darkgrey !important;
  }
`;

export const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  margin-top: 10px;
  margin-left: 100px;
  background: var(--button-color);
  color: var(--primary);
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 5px;

  @media (max-width: 1000px) {
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    width: 50px;
    height: 30px;
    margin: 0;
    font-size: 10px;
    font-weight: normal;
  }
`;

export const StyledReverseButton = styled(StyledButton)`
  margin-left: 5px;
  background: var(--primary);
  color: var(--button-color);
`;

export const StyledUser = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: 1px solid black;

  @media (max-width: 1300px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledMenuMobile = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
`;