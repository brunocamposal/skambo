import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  font-weight:700;
  margin-top:54px;
  color:#fff;
  background-color: var(--primary);
  border-radius:7px;
  height:35px;
  width:293px;
  cursor: pointer;
`;

export const LinkWrapper = styled(Link)`
  h3 {
    width: 287px;
    height: 45px;
    text-align: center;
    margin-top: 14px;
    font-size: 14px;
  }
`;

export const Error = styled.span`
  color: #f40909;
`;
