import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonForm = styled.button`
  font-weight: 700;
  margin-top: 20px;
  color: #fff;
  background-color: var(--primary);
  border-radius: 7px;
  height: 35px;
  width: 293px;
  cursor: pointer;
`;

export const LinkForm = styled(Link)`
  h3 {
    width: 287px;
    height: 45px;
    text-align: center;
    margin-top: 14px;
    font-size: 14px;
  }
`;

export const ImgForm = styled.img`
  width: 250px;
  margin: 25px;
`
