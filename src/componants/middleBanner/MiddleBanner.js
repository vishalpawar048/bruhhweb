import React from "react";
import {
  MiddleBannerContainer,
  MiddleBannerWrapper,
  MiddleBannerCard,
  MiddleBannerImg,
  ImgContainer,

} from "./MiddleBannerElements";
import { Link } from "react-router-dom";
import { IMG_LOW, IMG_HIGH } from "../../services/imageUrls";

const MiddleBanner = (props) => {
  function getHeight(width) {
    if (width < 420) {
      return "220";
    } else if (width < 600) {
      return "300";
    } else if (width < 800) {
      return "360";
    } else if (width < 900) {
      return "500";
    } else {
      return "700";
    }
  }
  return (
    <MiddleBannerContainer>
      <MiddleBannerWrapper>
        <MiddleBannerCard>
          <Link to="/products/women/tops">
            <ImgContainer>
              <MiddleBannerImg
                srcSet={`${IMG_LOW.tops} 500w,
                ${IMG_HIGH.tops} 1000w
                `}
                height={getHeight(props.width)}
                alt="Women Tops"
              ></MiddleBannerImg>
            </ImgContainer>
          </Link>
        </MiddleBannerCard>
      </MiddleBannerWrapper>
    </MiddleBannerContainer>
  );
};

export default MiddleBanner;
