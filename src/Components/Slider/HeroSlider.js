import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Slider.module.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <div className="w-full h-auto text-black-custom mt-[60px]">
      <Slider
        {...settings}
        className="w-[95%] m-auto flex justify-center items-center "
      >
        <div className={classes.hero1}>
          <div className="absolute top-[30%] right-[50px]">
          <h1 className="text-5xl text-white font-bold leading-[60px]">
            Buy best quality products
          </h1>
          </div>
        </div>
        <div className={classes.hero2}>
          <div className="absolute top-[20%] right-[50px]">
            <h1 className="text-5xl text-white font-bold mt-5 text-right">
              Fun
            </h1>
            <h1 className="text-5xl text-white font-bold mt-5 text-right">
              Happiness
            </h1>
            <h1 className="text-5xl text-white font-bold mt-5 text-right">
              Satisfaction
            </h1>
          </div>
        </div>
        <div className={classes.hero3}>
          <div className="absolute right-[50px] top-[30%]">
            <h1 className="text-5xl text-white font-bold leading-[60px]">
              Follow up best opportunities
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
