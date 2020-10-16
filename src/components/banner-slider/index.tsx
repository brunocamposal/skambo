import React from "react";
import Slider from "react-slick"
import { covers } from "./helper"
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { BannerContainer, CoverBanner } from './styles'

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    
    return (
        <BannerContainer>
            <div>
                <Slider {...settings}>
                    {covers && covers.map(({ title, imgUrl }, index) => {
                        return (
                            <CoverBanner key={index} alt={title} src={imgUrl} />
                        )
                    })}
                </Slider>
            </div>            
        </BannerContainer>
    )
}

export default Banner