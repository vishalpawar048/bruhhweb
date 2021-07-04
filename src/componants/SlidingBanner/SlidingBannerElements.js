import styled from "styled-components";

export const SlidingBannerContainer = styled.div`

  padding: 15px;
  background: #fff;
  color: #fff;
`;
export const SlidingBannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0;
`;

export const SlidingBannerCard = styled.div`
  margin-right: 6px;

  margin-left: 6px;
  line-height: 2;
  width: 29%;
`;

export const SlidingBannerImg = styled.img`

  max-width: 100%;
`;

export const SlidingBannerHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ImageCaptionContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 80%;
`;

export const ImageTitle = styled.h2`
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 2.5rem;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

export const ImageDescription = styled.h5`
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 1.8rem;
   @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
