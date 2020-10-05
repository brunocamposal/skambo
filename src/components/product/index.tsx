import React, { useState } from 'react';
import { ProductCard, CardImg, CardThumb, ProductThumb, CardProduct, ProductShow, CardInfo, ProductInfoName, ProductInfoDesc, ProductInfoIntr, InterestButton, FavButton } from './styles'
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

const Product = () => {
    const history = useHistory()

    const products = {	
        productID: "primary_key",
        name: "Cadeira Escritório Presidente Gamer Branca Tela Mesh Conforsit 4534",
        description: "Cadeira gamer executiva com muito conforto.",
        usability: "Novo, Semi Novo, Marcas de Uso, Bem Usado",
        value: "1206",
        userId: "2",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg",
        images: [
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg",
            "data:image/jpeg;base64,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",
            "https://www.casasbahia-imagens.com.br/Moveis/escritorio/cadeira-gamer/1502117044/1397526675/cadeira-escritorio-presidente-tela-mesh-gamer-branca-conforsit-4534-1502117044.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71LXMYdqP9L._AC_SY741_.jpg",
            "https://a-static.mlcdn.com.br/1500x1500/cadeira-escritorio-presidente-tela-mesh-gamer-branca-conforsit-4534/lojasn12/55/1dded3da65a8cb0d3e77b7d1ea124e53.jpg",
        ],
        views: "23",
        boost: "boostPlan",
        interests: ["Informática", "Móveis para casa", "Cama, mesa e banho"]
    }

    const [image, setImage] = useState(products.images[0])

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
                <ProductInfoDesc>{products.description}</ProductInfoDesc>
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