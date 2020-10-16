import styled from 'styled-components';

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

export const FormDiv = styled.div`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 750px) {
    column-count: 2;
    column-gap: 8px;
  }
  @media screen and (max-width: 749px) {
    column-count: 1;
  }
`;

export const ResetButton = styled(Button)`
  background: #ffffff;
  color: var(--primary-dark);

  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
    background: rgba(128, 128, 128, 0.178);
  }
`;

export const SendButton = styled(Button)`
  background: var(--primary);
  color: #ffffff;
  margin-left: 12px;

  &:hover {
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    transition: background-color 0.3s;
    background-color: #7252f2;
  } 
`;

export const Error = styled.p`
  color: red;
`;

export const DeleteImg = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: lightgray;
  color: red;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-flow: row nowrap;
  line-height: 1.4285em;
  margin-bottom: 60px;
`;
