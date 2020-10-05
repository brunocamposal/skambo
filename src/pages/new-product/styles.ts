import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  border-radius: 5px;
  display: inline-grid;
  height: 40px;
  place-items: center;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  width: 100px;
`;

export const ResetButton = styled(Button)`
  background: var(--primary-light);
  color: var(--primary-dark);
  :hover {
    background: var(--secondary-light);
    color: var(--secondary-dark);
  }
`;

export const SendButton = styled(Button)`
  background: var(--primary);
  color: var(--secondary-light);
  margin-left: 12px;
  :hover {
    background: var(--secondary-light);
    color: var(--secondary-dark);
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  line-height: 1.4285em;
`;

export const P = styled.p`
  color: red;
`;

export const Money = styled.input`
  content::before: '$ ';
`;
