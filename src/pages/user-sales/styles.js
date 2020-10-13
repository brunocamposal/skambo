import styled from 'styled-components'
import { Table as SemanticTable } from 'semantic-ui-react'

export const Container = styled.div`
  margin-top: 135px;
  margin-left: 50px;
  display: flex;
  flex-direction:row;
  width: 100%;
  flex-wrap: wrap;
  justify-content:center;
  
`;

export const UserInfo = styled.div`
  width:17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  img {
    width: 124px;
    height: 118px;
    display:block;
    margin: 10px;
    border:4px solid black;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
  }

  section {
    margin:12px 0 15px 0;
    font-size:13px;
  }
`;
export const ProfileButton = styled.button`
    background: var(--primary);
    display: block;
    width: 100%;
    border: none;
    height: 34px;
    color: white;
    font-weight: 700;
    font-size:13px;    /* margin-top:35px; */
    &:hover {
      box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.75);
      transition:background-color 0.3s;
      background-color: var(--primary-dark);
    }
`;

export const SettingsButton = styled(ProfileButton)`
background-color:#fff;
/* margin-top:0; */
color:#000;
    &:hover {
      border:1px solid #f7f7f7;
      background-color: #efeded;

    }
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
  /* margin-top:15%; */
  margin-left: 65%;
`;


export const Table = styled(SemanticTable)`    
 border:none !important;
 width:65% !important;
   img {
     width:50px;
     height:50px;
   }
`;