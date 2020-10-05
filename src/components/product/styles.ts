import styled from 'styled-components';
import { StyledButton } from '../menu/styles'

export const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    max-width: 950px;
    min-height: 500px;
    display: flex;
    margin-left: 50px;
`

export const CardImg = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
`
export const CardThumb = styled.div`
    width: 11%;
    height: 500px;
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
    cursor: pointer;

    overflow: hidden;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    
    &:hover {
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

`
export const CardInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductInfoName = styled.h1`
    font-size: 25px;
    font-weight: bold;
    padding-top: 30px;
`
export const ProductInfoDesc = styled.p`
    font-size: 20px;
    margin-top: 20px;
`
export const ProductInfoIntr = styled.p`
    font-size: 20px;
    margin-top: 20px;
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