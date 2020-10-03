import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledMenu = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
`;

export const StyledMenuLeft = styled.div`
<<<<<<< HEAD
  width: 20%;
=======
  width: 15%;
  min-width: 123px;

>>>>>>> 95fce0c9f230d185ffaf910ae11f05252aefe384
  @media (max-width: 500px) {
    width: 15%;
    display: flex;
    align-items: center;
    font-size: 30px;
  }
`;

export const StyledMenuCenter = styled.div`
<<<<<<< HEAD
  width: 40%;
=======
  width: 55%;

>>>>>>> 95fce0c9f230d185ffaf910ae11f05252aefe384
  @media (max-width: 500px) {
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMenuRight = styled.div`
  width: 30%;
  font-size: 32px;
  color: var(--primary);
  display: flex;
<<<<<<< HEAD
  @media (max-width: 1300px) {
    font-size: 20px;
  }
=======

>>>>>>> 95fce0c9f230d185ffaf910ae11f05252aefe384
  @media (max-width: 500px) {
    width: 20%;
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
`;

export const StyledLogo = styled.img`
  height: 50px;
  margin-top: 5px;

  @media (max-width: 1000px) {
    height: 40px;
    margin-top: 10px;
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
    background: #f4f4f6 !important;
    color: var(--primary-dark) !important;
    border-radius: 30px !important;
    border: 1px solid darkgrey !important;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
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
  color: var(--primary);
  background: #ffffff;
  cursor: pointer;
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
