import styled from 'styled-components';
import { Image, Header } from 'semantic-ui-react';

export const Container = styled.div`

`;

export const MsgError = styled.div`
    color: red;
    font-size: 20px;
    text-align: center;
    margin: 35px 0px;
`;

export const ButtonOffer = styled.button`
  margin: 20px 20px 20px 0px;
  float: right;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  border-radius: 7px;
  height: 35px;
  width: 133px;
  cursor: pointer;
  border: none;
`;

export const ButtonCancel = styled.button`
  margin: 20px 20px 20px 0px;
  float: right;
  font-weight: 700;
  color: #fff;
  background-color: red;
  border-radius: 7px;
  height: 35px;
  width: 133px;
  cursor: pointer;
  border: none;

`;

export const ButtonConfirm = styled.button`
  margin: 20px 20px 20px 0px;
  float: right;
  font-weight: 700;
  color: #fff;
  background-color: #8D70FB;
  border-radius: 7px;
  height: 35px;
  width: 133px;
  cursor: pointer;
  border: none;

`;

export const ProdBox = styled.div`
    border: 1px solid #8080801a;
    box-shadow: 0px 9px 10px -6px #c9c9c9b5;

  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
  }

  input[type='checkbox'] {
    margin-right:20px;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
  }
}
`;

export const ProdImage = styled(Image)`
  width: 76px;
  height: 76px;
  border-radius: 5px;
  border: 0.5px solid gray;
  margin: 10px 5px 10px 20px;
  padding: 3px;
`;
