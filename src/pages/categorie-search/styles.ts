import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 135px;
  width: 950px;

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

export const StyledDropdown = styled(Dropdown)`
  width: 450px!important;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    width: 90vw!important;
    margin: 0 auto!important;
  }
`;


