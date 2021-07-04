import React from "react";
import {
  SlidingBannerContainer,
  SlidingBannerWrapper,
  SlidingBannerCard,
  SlidingBannerImg,
  ImgContainer,
} from "./SlidingBannerElements";
import { Link } from "react-router-dom";
import { IMG_LOW, IMG_HIGH } from "../../services/imageUrls";

const SlidingBanner = (props) => {
  function getHeight(width) {
    if (width < 420) {
      return "136";
    } else if (width < 600) {
      return "200";
    } else if (width < 800) {
      return "260";
    } else if (width < 900) {
      return "320";
    } else {
      return "450";
    }
  }
  return (
    <SlidingBannerContainer>
      <SlidingBannerWrapper>
        <SlidingBannerCard>
          <Link to="/products/women/t-shirts">
            <ImgContainer>
              <SlidingBannerImg
             
                srcSet={`${IMG_LOW.womenTshirts} 500w,
                ${IMG_HIGH.womenTshirts} 1000w
                `}
                height={getHeight(props.width)}
                alt="Women Tshirts"
              ></SlidingBannerImg>
            </ImgContainer>
          </Link>
        </SlidingBannerCard>
        <SlidingBannerCard>
          <Link to="/products/men/t-shirts">
            <ImgContainer>
              <SlidingBannerImg
              
                srcSet={`${IMG_LOW.menTshirts} 500w,
                ${IMG_HIGH.menTshirts} 1000w
                `}
                height={getHeight(props.width)}
                alt="Men Tshirts"
              ></SlidingBannerImg>
            </ImgContainer>
          </Link>
        </SlidingBannerCard>
        <SlidingBannerCard>
          <Link to="products/men/bags">
            <ImgContainer>
              <SlidingBannerImg
                srcSet={`${IMG_LOW.bags} 500w,
                ${IMG_HIGH.bags} 1000w
                `}
                alt="Men Bags"
                height={getHeight(props.width)}
              ></SlidingBannerImg>
            </ImgContainer>
          </Link>
        </SlidingBannerCard>
      </SlidingBannerWrapper>
    </SlidingBannerContainer>
  );
};

export default SlidingBanner;
