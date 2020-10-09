import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content:center;
  
`;

export const ButtonsWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-evenly;
`;

export const RemoveButton = styled.button`
white-space: break-spaces;
    background-color: #ff1919;
    padding:10px;
    color:white;
    border: none;
    border-radius:5px;
    display: flex;
    &:hover {
      background-color: #c60000;
      cursor:pointer;
    }
`;

export const EditButton = styled.button`
white-space: break-spaces;
    background-color: var(--primary);
    padding:10px;
    color:white;
    border: none;
    border-radius:5px;
    display: flex;
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

export const Empty = styled.div`

  padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  img {
    margin-top:20px;
    width: 65%;
    height: 65%;
  }
`;

export const LoadingContainer = styled.div`
  margin-top:15%;
`;
