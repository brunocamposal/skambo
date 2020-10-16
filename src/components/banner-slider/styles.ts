import styled from "styled-components"

export const BannerContainer = styled.div`
  max-width: 850px;
  width: 100%;
  height: 300px;
  position: relative;
  left: 5%;
  right: 5%;
  margin-bottom: 100px;

    @media(max-width: 1090px) {
        max-width: 750;
        width: 80%;
        left: 20px;
        right: 20px;
    }

    @media(max-width: 990px) {
        max-width: 650;
        width: 70%;
        left: 20px;
        right: 20px;
    }

    @media(max-width: 890px) {
        max-width: 550;
        width: 60%;
        left: 20px;
        right: 20px;
    }

    @media(max-width: 790px) {
        max-width: 450;
        width: 50%;
        left: 20px;
        right: 20px;
    }

    @media(max-width: 690px) {
        max-width: 350;
        width: 40%;
        left: 20px;
        right: 20px;
    }

    @media(max-width: 590px) {
        display: none;
    }

    .slick-arrow::before {
        color: #000;
    }  
`;

export const CoverBanner = styled.img`
    height: 300px;
`