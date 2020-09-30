import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-top: 50px;

  h3 {
    text-align: left;
    padding: 10px;
    width: 200px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Categorie = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
`;
