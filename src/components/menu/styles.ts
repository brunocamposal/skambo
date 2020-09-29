import styled from 'styled-components';
import { Search } from 'semantic-ui-react'

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
`;

export const StyledMenuCenter = styled.div`
  width: 40%;
`;

export const StyledMenuRight = styled.div`
  width: 40%;
  font-size: 32px;
  display: flex;
`;

export const StyledIcons = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 30%;
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const StyledLogo = styled.img`
  height: 50px;
  top: 5px;
  margin-left:50%;
`;

export const StyledSearch = styled(Search)`
  width: 80%;
  top: 10px;

  input {
    width: 500px;
    background: var(--input-color) !important;
    color: darkgrey !important;
  }

  @media (max-width: 1300px) {
    input {
      width: 400px;
    }
  }

  @media (max-width: 1050px) {
    input {
      width: 300px;
    }
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
  border: 1px solid var(--text-color);
`;