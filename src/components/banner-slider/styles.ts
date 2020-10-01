import styled from "styled-components"

export const BannerContainer = styled.div`
  width: 45%;
  height: 300px;
  position: relative;
  left: 5%;
  right: 5%;

    @media(max-width:1024px) {
        width: 100%;
    }

    .slick-arrow::before {
        color: #000;
    }  
`;

export const CoverBanner = styled.img`
    height: 300px;
`