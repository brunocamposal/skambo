import styled from 'styled-components'

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-top:66px;
  strong {
    font-weight:400;
  }
  .star-icon {
    color: #F6C03E;
    width:35px;
    height:35px;
  }
  h2 {
    font-family: 'Rowdies', cursive;
    margin:0;
    display:inline-block;
    margin-left:11px;
    font-size:22px;
    font-weight:400;
  }
`;
export const CarouselContainer = styled.div`
  width:55%;
  height:300px;

@media(max-width:1024px) {
  width:100%
}
  .slick-arrow::before {
    color: #000;
  }
  
`;