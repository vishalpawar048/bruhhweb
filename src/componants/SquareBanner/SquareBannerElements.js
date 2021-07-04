import styled from "styled-components";

export const SquareBannerContainer = styled.div`

  background-color: #fff;
`;
export const SquareBannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0;
`;

export const SquareBannerCard = styled.div`
  margin: 3%;
  width: 40%;
`;

export const SquareBannerImg = styled.img`
  height: auto;
  max-width: 100%;
`;

export const SquareBannerHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const ImageCaptionContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
`;

export const ImageTitle = styled.h2`
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 3rem;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
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
