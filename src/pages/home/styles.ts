import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  margin-top: 80px;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;
