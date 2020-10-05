import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  
`;
export const Button = styled.button`
    background-color: #ff1919;
    padding:10px;
    color:white;
    border: none;
    border-radius:5px;
    &:hover {
      background-color: #c60000;
      cursor:pointer;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

