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

  @media (max-width: 500px) {
    height: 100px;
    position: relative;
  }
`;

export const StyledMenuLeft = styled.div`
  width: 15%;
  min-width: 123px;

  @media (max-width: 500px) {
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

  @media (max-width: 500px) {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 50px;
    left: 0;
  }
`;

export const StyledMenuRight = styled.div`
  width: 30%;
  font-size: 32px;
  color: var(--primary);
  display: flex;

  @media (max-width: 500px) {
    width: 30%;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledIcons = styled.div`
  margin: 10px;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 500px) {
    width: 80px;
  }
`;

export const StyledLogo = styled.img`
  height: 50px;
  margin-top: 5px;

  @media (max-width: 1000px) {
    height: 40px;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

export const StyledSearch = styled(Input)`
  width: 80%;
  top: 10px;
  left: 5px;
  cursor: pointer;

  input {
    background: #f4f4f6 !important;
    color: var(--primary-dark) !important;
    border-radius: 30px !important;
    border: 1px solid darkgrey !important;
  }

  @media (max-width: 700px) {
    width: 95%;
  }

  @media (max-width: 500px) {
    width: 90%;
    left: 5%;
    top: 5px;
  }
`;

export const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  background: var(--primary);
  color: var(--primary-light);
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1000px) {
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    margin: 0;
    width: 100px;
  }
`;

export const StyledReverseButton = styled(StyledButton)`
  margin-left: 5px;
  color: var(--primary);
  background: #ffffff;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

export const StyledUser = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: 1px solid black;
`;

