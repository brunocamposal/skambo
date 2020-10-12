import styled from 'styled-components';
import { StyledButton } from '../menu/styles'
import { Image } from 'semantic-ui-react'

export const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    max-width: 950px;
    min-height: 500px;
    display: flex;
    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
    }
`

export const CardImg = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
    }
`
export const CardThumb = styled.div`
    width: 11%;
    height: 500px;
    @media (max-width: 920px) {
        display: flex;
        flex-direction:row;
        justify-content: center;
    }
`

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
`
export const CardProduct = styled.div`
    width: 89%;
    height: 400px;
    display: flex;
    justify-content: center;
`
export const ProductShow = styled.img`
    height: 400px;
    max-width: 400px;
    cursor: pointer;
    overflow: hidden;
    max-width: 100%;
    
    @media (max-width: 920px) {
        margin-top: 0;
    }
`
export const CardInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductInfoName = styled.h1`
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    margin-bottom: 10px;
    @media (max-width: 920px) {
        position: absolute;
        top: 70px;
    }
`
export const ProductInfoValue = styled.p`
    font-size: 16px;
    font-weight: bold;
    width: 70%;
    margin: 0;
    color: var(--primary);
`
export const ProductInfoDesc = styled.p`
    font-size: 14px;
    width: 70%;
`
export const ProductInfoIntr = styled.p`
    font-size: 14px;
    width: 70%;
`
export const InterestButton = styled(StyledButton)`
    width: 300px;
    margin-top: 50px;
    cursor: pointer;
`

export const FavButton = styled(InterestButton)`
    background: red;
    margin-top: 10px;
`
export const ImageLoading = styled(Image)`
  width: 100vw;
  height: 500px;
`;