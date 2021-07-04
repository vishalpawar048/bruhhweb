import styled from "styled-components";

export const ProductsHeading = styled.h1`
  text-align: center;
  color: black;
`;

export const ProductCard = styled.div`
  width: 40%;
  /* height: calc(100% / 1.5); */
  @media (max-width: 800px) {
    width: 70%;
    height: 700px; 
    /* height: calc(100% / 1.5); */
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 550px; 
    /* height: calc(100% / 1.5); */
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  @media (max-width: 800px) {
    padding: 0;
  }

`;

export const ProductContainer = styled.div`
  display: flex;
  margin:0 auto;
  background: white;
  justify-content: start;
  text-align: center;
  flex-direction:coloumn;
  @media (max-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const ProductDetailsContainer = styled.div`
  width: 50%;
  padding: 10px;
  /* flex-grow: 1; */
  justify-content:center;
  width: 60%;
  /* height: calc(100% / 1.5); */
  @media (max-width: 800px) {
    width: 70%;
    /* height: calc(100% / 1.5); */
  }
  @media (max-width: 420px) {
    width: 100%;
    /* height: calc(100% / 1.5); */
  }
`;

export const ProductName = styled.h1`
  width:100%;
  color: black;
  /* font-size: 2em; */
  margin: 0px;
  text-align: center;
`;

export const ProductPrice = styled.div`
  color: black;
  font-size: 1.4em;
  text-align: center;
`;
export const PriceInfo = styled.div`
  color: black;
  font-size: 0.6em;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
export const ProductInfo = styled.h1`
  color: black;
  font-size: 0.8em;
  margin: 0px;
  text-align: center;
  font-style: oblique;
  width: 80%;
   @media (max-width: 800px) {
    width: 70%;
  }
`;

export const ProductWebsite = styled.h1`
  color: black;
  font-size: 1.5em;
  margin: 10px;
  text-align: center;
`;
export const WebsiteBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const WebsiteBtn = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  text-align: center;
  background: #d70068;
  width: 30%;
  &:hover {
    color: white;
  }

  @media (max-width: 420px) {
    width: 45%;
  }
`;

export const WebsiteDescription = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  color: #d70068;
`;
export const WhatsAppBtn = styled.div`
  margin-right: 10px;
`;
export const LikeBtnWrapper = styled.div``;

export const RaningWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top:10px;
  padding-bottom:10px;
`;

export const RatingTitle = styled.div`
  
  width:135px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CustomerRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CxRatingBtn = styled.div`
  display: flex;
  justify-content: center;
  padding:10px;
`;

export const CxRatingBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
 
`;



