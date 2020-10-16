import styled from 'styled-components';
import { Table as SemanticTable } from 'semantic-ui-react';

export const Container = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

export const UserInfo = styled.div`
  margin-top: 12px;
  text-align: center;
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 24%;
  }

  @media (max-width: 750px) {
    width: 45%;
  }

  img {
    width: 124px;
    height: 118px;
    display: block;
    margin: 10px;
    border: 4px solid black;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
  }

  section {
    margin: 12px 0 15px 0;
    font-size: 13px;
  }

`;



export const ProfileButtonActive = styled.button`
  background: var(--primary);
  display: block;
  width: 100%;
  border: none;
  border-radius: 7px;
  height: 35px;
  width: 210px;
  color: white;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 7px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    transition: background-color 0.3s;
    background-color: #7252f2;
  } 
`;


export const ProfileButton = styled(ProfileButtonActive)`
  background-color: #fff;
  /* margin-top:0; */
  color: #000;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
    background: rgba(128, 128, 128, 0.178);
  }
`;

export const SettingsButton = styled(ProfileButton)`
  background-color: #fff;
  /* margin-top:0; */
  color: #000;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
    background: rgba(128, 128, 128, 0.178);
  }
`;


export const SettingsButtonActive = styled(ProfileButtonActive)`
  
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const RemoveButton = styled.button`
  white-space: break-spaces;
  justify-content: center;
  width: 91px;
  height: 23px;
  font-weight: 700;
  background-color: #ea4326;
  padding: 4px;
  color: white;
  border: none;
  border-radius: 7px;
  display: flex;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c60000;
    cursor: pointer;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Empty = styled.div`
  width: 80%;
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 60px;
    width: 65%;

  }
  @media (max-width: 700px) {
    img {
      width: 300px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  padding-top: 100px;
`;

export const TableContainer = styled.div`
  overflow-x: scroll;
`;
export const Table = styled(SemanticTable)`
  border: none !important;
  margin-left: 20px !important;
  img {
    width: 50px;
    height: 50px;
  }
`;
