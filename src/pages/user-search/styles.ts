import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 125px;
  width: auto;

  @media (max-width: 480px) {
    margin-top: 30px;

    h3 {
      text-align: center;
    }
  }
`;

export const ResultSearch = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
