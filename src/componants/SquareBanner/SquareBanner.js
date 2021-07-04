import React from "react";
import {
  SquareBannerContainer,
  SquareBannerWrapper,
  SquareBannerCard,
  SquareBannerImg,
  ImgContainer,
} from "./SquareBannerElements";
import { Link } from "react-router-dom";
import { IMG_LOW, IMG_HIGH } from "../../services/imageUrls";

const SquareBanner = (props) => {
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
    <SquareBannerContainer>
      <SquareBannerWrapper>
        <SquareBannerCard>
          <Link to="/products/men/shoes">
            <ImgContainer>
              <SquareBannerImg
                srcSet={`${IMG_LOW.menShoes} 500w,
                ${IMG_HIGH.menShoes} 1000w
                `}
                height={getHeight(props.width)}
                alt="Men Shoes"
              ></SquareBannerImg>
            </ImgContainer>
          </Link>
        </SquareBannerCard>
        <SquareBannerCard>
          <Link to="/products/women/shoes">
            <ImgContainer>
              <SquareBannerImg
                
                srcSet={`${IMG_LOW.womenShoes} 500w,
                ${IMG_HIGH.womenShoes} 1000w
                `}
                height={getHeight(props.width)}
                alt="Women Shoes"
              ></SquareBannerImg>
            </ImgContainer>
          </Link>
        </SquareBannerCard>
        <SquareBannerCard>
          <Link to="/products/men/jacket-hoodies">
            <ImgContainer>
              <SquareBannerImg
                srcSet={`${IMG_LOW.menJackets} 500w,
                ${IMG_HIGH.menJackets} 1000w
                `}
                height={getHeight(props.width)}
               
                alt="Men Jackets"
              ></SquareBannerImg>
            </ImgContainer>
          </Link>
        </SquareBannerCard>
        <SquareBannerCard>
          <Link to="/products/women/jacket-hoodies">
            <ImgContainer>
              <SquareBannerImg
               
                srcSet={`${IMG_LOW.womenJackets} 500w,
                ${IMG_HIGH.womenJackets} 1000w
                `}
                height={getHeight(props.width)}
                alt="Women Jackets"
              ></SquareBannerImg>
            </ImgContainer>
          </Link>
        </SquareBannerCard>
      </SquareBannerWrapper>
    </SquareBannerContainer>
  );
};

export default SquareBanner;
