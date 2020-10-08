import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 125px;
  width: 950px;

  @media (max-width: 480px) {
    margin: 30px ;
  }
  
  h3{
    margin: 10px 30px;
  }

`;

export const ResultSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

