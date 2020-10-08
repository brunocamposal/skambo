import React, { useState, useEffect } from 'react';
import {
  ProductCard,
  CardImg,
  CardThumb,
  ProductThumb,
  CardProduct,
  ProductShow,
  CardInfo,
  ProductInfoValue,
  ProductInfoName,
  ProductInfoDesc,
  ProductInfoIntr,
  InterestButton,
  FavButton
} from './styles'
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import axios from 'axios'

const Product = () => {
    const history = useHistory()
    const [products, setProducts] = useState({
      productID: "",
      name: "",
      description: "",
      usability: "",
      value: "",
      userId: "",
      thumbnail: "",
      images: [],
      views: "",
      boost: "",
      interests: []
  })
    
    const id = 0
    const url = `https://capstone-q2.herokuapp.com/products/`
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvMTJAdGVzdDEyLmNvbSIsImlhdCI6MTYwMTkzMjIzMiwiZXhwIjoxNjAxOTM1ODMyLCJzdWIiOiI3In0.jHNpG6pa36_O-ghhc0bh6MTIAGXRBibQq3BtssXtMSM'

    useEffect(() => {
      axios.
      get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const product = res.data[id]
        setProducts(product)
        setImage(product.images[0])
      })
      .catch((err) => console.log(err))
    }, [setProducts])

    const [image, setImage] = useState('')

    return (
        <ProductCard>
            <CardImg>
              <CardThumb>
                {products.images.map((image, index) => {
                  return <ProductThumb key={index} src={image} alt='thumbnail' onMouseOver={() => setImage(products.images[index])} />
                })}
              </CardThumb>
              <CardProduct>
                <ProductShow src={image} alt='destak' />
              </CardProduct>
            </CardImg>
            <CardInfo>
                <ProductInfoName>{products.name}</ProductInfoName>
                <ProductInfoValue>R$ {products.value}</ProductInfoValue>
                <ProductInfoDesc>{products.description}</ProductInfoDesc>
                <ProductInfoDesc><b>CONDIÇÃO: </b>{products.usability}</ProductInfoDesc>
                <ProductInfoIntr>
                    Interesses:
                    {products.interests.map((interest, index) => {
                        return <li key={index}>{interest}</li>
                    })}
                </ProductInfoIntr>
                <InterestButton onClick={() => history.push('/user/interest')}>Tenho Interesse</InterestButton>
                <FavButton onClick={() => 'add favotites'}><Icon name='heart' />Adicionar aos favoritos</FavButton>
            </CardInfo>
        </ProductCard>
    )
}

export default Product