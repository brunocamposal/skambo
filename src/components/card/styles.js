import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 20px;
  padding: 25px;
  cursor: pointer;

  strong {
    font-size: 14px;
    font-weight: 700;
  }

  p {
    color: #545454;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  img {
    width: 182.68px;
    height: 197px;
    border-radius: 10px;
    object-position: top;
    object-fit: cover;
  }
  div {
    margin-top: 17px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    img {
      width: 130px;
      height: 160px;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 110px;
      height: 130px;
    }

    strong {
      font-size: 12px;
    }
  }
`;
