import styled from 'styled-components';

export const MainBanner = styled.div`
  background: ({color}) => color;
  width: 900px;
  display: grid;
  gridtemplatecolumns: repeat(3, 1fr);
`;

export const Infos = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Img = styled.img`
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 #336;
  max-width: 290px;
  max-height: 190px;
  trasform: rotate(-12deg);
  transition: transform 0.5s ease;
  :hover: {
    transform: scale(1.1);
  }
`;
