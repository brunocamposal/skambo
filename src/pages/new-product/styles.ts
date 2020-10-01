import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background-color: var(--secondary-light);
`;

export const StyledButton = styled.button`
  background: var(--primary);
  color: var(--secondary-light);
  padding: 10px;
  border-radius: 3px;
  display: grid;
  place-items: center;
  :hover {
    background: var(--primary-light);
    color: var(--secondary-dark);
  }
`;
