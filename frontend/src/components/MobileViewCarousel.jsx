import React from "react";
import Images from "./ImagesImport";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/components.css";

const MobileViewCarousel = () => {
  const emrData = [
    {
      id: 1,
      path: `${Images.rectangle_image}`,
      content: " 1Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      path: `${Images.insights_banner}`,
      content: "2Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      path: `${Images.services_banner}`,
      content: "3Lorem ipsum dolor sit amet.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {emrData.map((item, index) => {
          return (
            <div className="emr-parent" key={index}>
              <img className="emr-img" src={item.path} alt="First" />
              <p className="emr-para">{item.content}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default MobileViewCarousel;
