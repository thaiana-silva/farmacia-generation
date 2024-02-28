import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";

function BannerCarrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Banner 1" className="w-full h-96" />
      </div>
      <div>
        <img src={banner2} alt="Banner 2" className="w-full h-96" />
      </div>
      <div>
        <img src={banner1} alt="Banner 3" className="w-full h-96" />
      </div>
    </Slider>
  );
}

export default BannerCarrossel;
