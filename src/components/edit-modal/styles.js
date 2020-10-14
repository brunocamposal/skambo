import styled from 'styled-components'

export const EditButton = styled.button`
    background-color: #818085;
    white-space: break-spaces;
    justify-content:center;
    width:91px;
    height:23px;
    font-weight:700;
    padding:4px;
    color:white;
    border: none;
    border-radius:7px;
    display: flex;
    transition:background-color 0.3s;
   
    &:hover {
      background-color: #727272;
      cursor:pointer;
    }
`;