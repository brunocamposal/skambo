import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  margin-top: 120px;

  h3 {
    text-align: left;
    font-weight: 800;
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
