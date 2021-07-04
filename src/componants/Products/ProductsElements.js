import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding: 15px 0px;
  background: #fff;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
`;
export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0;
`;

export const ProductsCard = styled.div`
  width: 33%;
  text-align: center;

  @media (max-width: 800px) {
    width: calc(100% / 2);
    padding: 4px;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 500px;

  @media (max-width: 800px) {
    width: 100%;
    height: 230px;
  }
`;

export const ProductsImg = styled.img`
  width: 85%;
  height: 500px;
  object-fit: contain;

  @media (max-width: 800px) {
    width: 87%;
    height: 230px;
    object-fit: contain;
  }
`;

export const ProductsHeadingContainer = styled.div`
  display: flex;
  /* width: 100%; */
  height: ${(props) => (props.width < 500 ? "500px" : "600px")};
  justify-content: center;
  align-items: center;
`;

export const ProductsHeading = styled.h1`
  text-align: center;
  color: black;
`;

export const ProductInfoContainer = styled.div`
  padding: 10px;
`;
export const ProductName = styled.h1`
  color: black;
  font-size: 0.8em;
  margin: 0px;
  text-align: center;
`;

export const ProductPrice = styled.h1`
  color: black;
  font-size: 0.8em;
  margin: 0px;
  text-align: center;
`;
export const ProductWebsite = styled.h1`
  color: black;
  font-size: 0.8em;
  margin: 0px;
  text-align: center;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled.div`
  max-width: 100%;
  padding: 7px 32px;

  bottom: 1%;
  border-radius: 4px;
  border: none;
  background: #d70068;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  position: fixed;
  z-index: 10;
`;

export const LikeBtnWrapper = styled.div``;
