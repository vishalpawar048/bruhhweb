import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImgContainer } from "./CarouselBannersElement";

import { IMG_LOW, IMG_HIGH } from "../../services/imageUrls";

const CarouselBanners = (props) => {
  function getHeight(width) {
    if (width < 420) {
      return "220";
    } else if (width < 600) {
      return "300";
    } else if (width < 800) {
      return "360";
    } else if (width < 900) {
      return "500";
    } else if (width < 1000) {
      return "550";
    } else if (width < 1200) {
      return "600";
    } else if (width < 1250) {
      return "780";
    } else {
      return "680";
    }
  }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Link to="/products/women/dresses">
            <ImgContainer>
              <img
                className="d-block w-100"
                srcSet={`${IMG_LOW.womenDresses} 500w,
                ${IMG_HIGH.womenDresses} 1000w
                `}
                height={getHeight(props.width)}
                alt="Dresses"
              />
            </ImgContainer>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products/men/shirts">
            <ImgContainer>
              <img
                className="d-block w-100"
                srcSet={`${IMG_LOW.menShirts} 500w,
                ${IMG_HIGH.menShirts} 1000w
                `}
                height={getHeight(props.width)}
                alt="Men Shirts"
              />
            </ImgContainer>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products/gifts">
            <ImgContainer>
              <img
                className="d-block w-100"
                srcSet={`${IMG_LOW.gifts} 500w,
                ${IMG_HIGH.gifts} 1000w
                `}
                height={getHeight(props.width)}
                alt="Gifts"
              />
            </ImgContainer>
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselBanners;
