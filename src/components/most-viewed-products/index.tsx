import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import * as Styled from './styles';
import Card from '../../components/card';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import axios from 'axios'

// const products = [
//   {
//     title: 'Fifa 19',
//     category: 'Jogos',
//     imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61uwGK1Iz0L._AC_SL1000_.jpg'
//   },
//   {
//     title: 'Fifa 19',
//     category: 'Jogos',
//     imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61uwGK1Iz0L._AC_SL1000_.jpg',
//   },
//   {
//     title: 'Fifa 19',
//     category: 'Jogos',
//     imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61uwGK1Iz0L._AC_SL1000_.jpg',
//   },
//   {
//     title: 'Fifa 19',
//     category: 'Jogos',
//     imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61uwGK1Iz0L._AC_SL1000_.jpg',
//   },
//   {
//     title: 'Bicicleta RX890',
//     category: 'Bicicletas',
//     imgUrl: 'https://img.olx.com.br/images/32/320073567225211.jpg',
//   },
//   {
//     title: 'Bicicleta RX890',
//     category: 'Bicicletas',
//     imgUrl: 'https://img.olx.com.br/images/32/320073567225211.jpg',
//   },
//   {
//     title: 'Bicicleta RX890',
//     category: 'Bicicletas',
//     imgUrl: 'https://img.olx.com.br/images/32/320073567225211.jpg',
//   },
//   {
//     title: 'Bicicleta RX890',
//     category: 'Bicicletas',
//     imgUrl: 'https://img.olx.com.br/images/32/320073567225211.jpg',
//   },
// ];
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNjAxOTIwMDgxLCJleHAiOjE2MDE5MjM2ODEsInN1YiI6IjQifQ.E66xPfmSue9ydnqlqHasWOt-qYznm0tXio80QqLzMk4"
const MostViewedProducts = () => {
  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    axios.get('https://capstone-q2.herokuapp.com/products', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerPadding: '10px',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Styled.Title>
        <AiFillStar className="star-icon" />
        <h2>Mais procurados</h2>
      </Styled.Title>
      <Styled.CarouselContainer>
        <Slider {...settings}>
          {products &&
            products.map((product: any) => {
              return <Card title={product.name} category={product.category} imgUrl={product.thumbnail} />;
            })}
        </Slider>
      </Styled.CarouselContainer>
      <Styled.Mobile>
        <Styled.MobileContainer>
          {products &&
            products.map((product: any) => {
              return <Card title={product.name} category={product.category} imgUrl={product.thumbnail} />;
            })}
        </Styled.MobileContainer>
      </Styled.Mobile>
    </div>
  );
};

export default MostViewedProducts;
