import styled from 'styled-components'
import { Table as SemanticTable } from 'semantic-ui-react'

export const Container = styled.div`
  margin-top: 135px;
  margin-left: 50px;
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
    justify-content:center;
    width:91px;
    height:23px;
    font-weight:700;
    background-color: #EA4326;
    padding:4px;
    color:white;
    border: none;
    border-radius:7px;
    display: flex;
    transition:background-color 0.3s;
    &:hover {
      
      background-color: #c60000;
      cursor:pointer;
    }
`;

export const EditButton = styled(RemoveButton)`
    background-color: #818085;
    &:hover {
      background-color: #727272;
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


export const Table = styled(SemanticTable)`
   img {
     width:50px;
     height:50px;
   }
`;