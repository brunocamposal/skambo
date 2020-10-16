import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  strong {
    font-weight: 400;
  }
  .star-icon {
    color: #f6c03e;
    width: 35px;
    height: 35px;
  }
  h2 {
    margin: 0;
    display: inline-block;
    margin-left: 11px;
    font-size: 22px;
    font-weight: 800;
  }

  @media (max-width: 480px) {
    margin-top: 0px;
    justify-content: center;
  }
`;
export const CarouselContainer = styled.div`
  width: 900px;
  height: 300px;
  margin-bottom: 85px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    display: none;
  }

  .slick-arrow::before {
    color: #000;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
