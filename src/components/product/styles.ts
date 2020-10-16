import styled from 'styled-components';
import { StyledButton } from '../menu/styles';
import { Image } from 'semantic-ui-react';

export const ProductCard = styled.div`
  width: 100%;
  height: 100%;
  max-width: 950px;
  min-height: 500px;
  display: flex;
  margin-top: 10px;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const CardImg = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const CardThumb = styled.div`
  width: 11%;
  height: 500px;
  @media (max-width: 920px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ProductThumb = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid darkgrey;
    box-shadow: 0px 0px 8px darkgrey;
  }
`;
export const CardProduct = styled.div`
  width: 89%;
  height: 400px;
  display: flex;
  justify-content: center;
`;
export const ProductShow = styled.img`
  height: 400px;
  max-width: 400px;
  cursor: pointer;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: 920px) {
    margin-top: 0;
  }
`;
export const CardInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
  }

`;
export const ProductInfoName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 10px;
  @media (max-width: 920px) {
    position: absolute;
    top: 70px;
  }

  @media (max-width: 480px) {
    top: 100px;
  }
`;
export const ProductInfoValue = styled.p`
    font-size: 18px;
    font-weight: bold;
    width: 70%;
    margin: 0;
    margin-bottom: 10px;
    padding: 2px 0px 0px 15px;
    background-image: linear-gradient(to right, #8D70FB, white);
    color: #fff;
    border-radius: 15px 0 0 15px;
`
export const ProductInfoDesc = styled.p`
    font-size: 14px;
    width: 100%;
    padding-left: 30%;
    border-top: 1px solid lightgrey;
    border-radius: 5px;
`
export const ProductInfoIntr = styled.p`
    font-size: 14px;
    width: 100%;
    padding-left: 30%;
    border-top: 1px solid lightgrey;
    border-radius: 5px;
`
export const InterestButton = styled(StyledButton)`
  width: 300px;
  margin-top: 30px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const FavButton = styled(InterestButton)`
  background: red;
  margin-top: 10px;
  @media (max-width: 480px) {
    font-size: 13px;
  }

  &:hover {
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    transition: background-color 0.3s;
    background-color: red;
  } 
`;
export const ImageLoading = styled(Image)`
  width: 100vw;
  height: 500px;
`;
export const SharePoint = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: #3d847c;
  font-size: 24px;
  margin-bottom: 15px;

  a {
    margin-left: 10px;
  }
`;
