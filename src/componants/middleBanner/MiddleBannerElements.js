import styled from "styled-components";

export const MiddleBannerContainer = styled.div`

  background-color: #fff;
`;
export const MiddleBannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0;
`;

export const MiddleBannerCard = styled.div`

  width: 100%;
`;

export const MiddleBannerImg = styled.img`

  max-width: 100%;
`;

export const MiddleBannerHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const ImageCaptionContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 65%;
`;

export const ImageTitle = styled.h2`
  color: #fff;
  font-family: "Quicksand", sans-serif;

  font-size: 6rem;
  @media (max-width: 800px) {
    font-size: 5rem;
  }
  @media (max-width: 420px) {
    font-size: 3rem;
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
