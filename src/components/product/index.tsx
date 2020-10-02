import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { ProductCard, ProductImg, ProductInfo, ProductInfoName, ProductInfoDesc, ProductInfoIntr } from './styles'


const Product = () => {
    const images = [
        {
          original: 'https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg',
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY355_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY355_.jpg",
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
        },
        {
          original: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY450_.jpg",
          thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY450_.jpg",
        },
    ];
        
    const products = {	
        productID: "primary_key",
        name: "Cadeira Escritório Presidente Gamer Branca Tela Mesh Conforsit 4534",
        description: "Random description",
        usability: "Novo, Semi Novo, Marcas de Uso, Bem Usado",
        value: "1206",
        userId: "2",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg",
        images: [
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY879_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY355_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY606_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY741_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY550_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY679_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61TyU%2BcX4IL._AC_SY450_.jpg",
        ],
        views: "23",
        boost: "boostPlan",
        interests: ["Informática", "Móveis para casa", "Cama, mesa e banho"]
    }

    return (
        <ProductCard>
            <ProductImg>
                <ImageGallery items={images} />
            </ProductImg>
            <ProductInfo>
                <ProductInfoName>{products.name}</ProductInfoName>
                <ProductInfoDesc>{products.description}</ProductInfoDesc>
                <ProductInfoIntr>
                    Interesses:
                    {products.interests.map((interest, index) => {
                        return <li key={index}>{interest}</li>
                    })}
                </ProductInfoIntr>
                <button>Tenho Interesse</button>
                <button>Adicionar aos favoritos</button>
            </ProductInfo>
        </ProductCard>
    )
}

export default Product