import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 135px;
  width: 950px;

  h4 {
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    width: 100vw;

    h3 {
      text-align: center;
    }
  }
`;

export const ResultSearch = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: start;
  }
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 15px;
  left: 0px;
  color: #d13a1e;
  font-size: 25px;
  cursor: pointer;

  .iconDisfavor{
    display: none;
  }

  &:hover {
    .iconFavored {
      display: none;
    }

    .iconDisfavor {
        display: block;
    }
  }
`;
