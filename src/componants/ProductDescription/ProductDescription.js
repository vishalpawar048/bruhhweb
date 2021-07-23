import React, { useEffect, useState } from "react";
import {
  getProductById,
  getWebsiteDetails,
} from "../../services/getProductById";
import { Carousel } from "react-bootstrap";
import {
  ProductContainer,
  ProductCard,
  ImgContainer,
  ProductDetailsContainer,
  WebsiteBtn,
  ProductName,
  ProductPrice,
  ProductWebsite,
  PriceInfo,
  WebsiteBtnWrapper,
  ProductInfo,
  ProductInfoWrapper,
  LikeBtnWrapper,
  WhatsAppBtn,
  RaningWrapper,
  RatingTitle,
  RatingWrapper,
} from "./ProductDescriptionElement";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import LoginModal from "../Login/LoginModal";
import {
  getWishList,
  addToWishlist,
  removefromWishlist,
} from "../../services/wishlist";

import Rating from "@material-ui/lab/Rating";

import CustomerComments from "../CustomerComments/CustomerComments";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ThanksModal from "../FeedbackModal/ThanksModal";

const ProductDescription = (props) => {
  let [product, setproduct] = useState("");
  const [loading, setloading] = useState(true);
  let [websiteDetail, setWebsiteDetail] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  let emailId = localStorage.getItem("email");
  let feedbackGiven = localStorage.getItem("feedback");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showThanksModal, setShowThanksModal] = useState(false);

  useEffect(() => {
    async function getProduct(id) {
      let prod = await getProductById(id);
      setproduct(prod);
      setloading(false);
      // setloading(true);
      let websiteDetails = await getWebsiteDetails(prod.website);
      setWebsiteDetail(websiteDetails[0]);
    }
    getProduct(props.id);
  }, [props.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const getDate = (date) => {
    if (date) {
      let d = new Date(date);
      return `${d.getDate()}/${
        d.getMonth() + 1
      }/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`;
    }
  };
  useEffect(() => {
    async function getWishlist() {
      if (emailId) {
        let wishlistArr = await getWishList(emailId);
        let productIds = [];
        wishlistArr.map((ele) => {
          productIds.push(ele._id);
        });
        setWishlist([...productIds]);
      }
    }
    getWishlist();
  }, [emailId]);

  const handleLikeButton = async (productId) => {
    if (emailId) {
      if (wishlist.includes(productId)) {
        const index = wishlist.indexOf(productId);
        if (index > -1) {
          wishlist.splice(index, 1);
        }

        setWishlist([...wishlist]);
        removefromWishlist(emailId, productId);
      } else {
        wishlist.push(productId);
        setWishlist([...wishlist]);
        try {
          addToWishlist(emailId, productId);
        } catch (error) {}
      }
    } else {
      setLoginModal(true);
    }
  };

  const handleWebsiteBtn = (url) =>{
    if(feedbackGiven){
      window.open(url, "_blank");
    }else{
      setShowFeedbackModal(true)
    }
   
  }


  return (
    <ProductContainer>
      {loginModal ? (
        <LoginModal
          setLoginModal={setLoginModal}
          openModal={true}
          model={true}
        />
      ) : null}
      {/* {loading ? (
          <ProductsHeadingContainer width={width}>
            <ProductsHeading> Loading...</ProductsHeading>
          </ProductsHeadingContainer>
        ) : null} */}

      <ProductCard>
        <ImgContainer>
          <Carousel interval={null} slide={false}>
            {product
              ? product.imgUrls.map((img) =>
                  img ? (
                    <Carousel.Item key={img}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                        width={100}
                        // height={getHeight(width)}
                      />
                    </Carousel.Item>
                  ) : null
                )
              : null}
          </Carousel>
        </ImgContainer>
      </ProductCard>

      <ProductDetailsContainer>
        <ProductName>{product.name}</ProductName>
        <ProductInfoWrapper>
          <ProductInfo>{product.description}</ProductInfo>
        </ProductInfoWrapper>
        <ProductPrice>₹ {product.price} * </ProductPrice>
        <PriceInfo>
          Price may vary on the actual website. The above price is as per the
          website on {getDate(product.createdAt)}.
        </PriceInfo>
        <br></br>

        <Rating
          name="read-only"
          precision={0.5}
          value={product.rating ? parseFloat(product.rating) : 0}
          readOnly
        />
        <ProductWebsite>{product.website}</ProductWebsite>

        <RatingWrapper>
          <RaningWrapper>
            <RatingTitle>Website Rating</RatingTitle>
            <Rating
              name="read-only"
              precision={0.5}
              value={
                websiteDetail.overallRating
                  ? parseFloat(websiteDetail.overallRating)
                  : 0
              }
              readOnly
            />
          </RaningWrapper>

          <RaningWrapper>
            <RatingTitle>Delivery</RatingTitle>
            <Rating
              name="read-only"
              precision={0.5}
              value={
                websiteDetail.deliveryRating
                  ? parseFloat(websiteDetail.deliveryRating)
                  : 0
              }
              readOnly
            />
          </RaningWrapper>
          <RaningWrapper>
            <RatingTitle>Return Policy</RatingTitle>
            <Rating
              name="read-only"
              precision={0.5}
              value={
                websiteDetail.returnPolicy
                  ? parseFloat(websiteDetail.returnPolicy)
                  : 0
              }
              readOnly
            />
          </RaningWrapper>
          <RaningWrapper>
            <RatingTitle>Product Quality</RatingTitle>
            <Rating
              name="read-only"
              precision={0.5}
              value={
                websiteDetail.productsQuality
                  ? parseFloat(websiteDetail.productsQuality)
                  : 0
              }
              readOnly
            />
          </RaningWrapper>
        </RatingWrapper>

        <WebsiteBtnWrapper>
          <WebsiteBtn
            as="a"
            onClick={() => handleWebsiteBtn(product.url)}
            target="_blank"
          >
            Visit Website
          </WebsiteBtn>
          <WhatsAppBtn>
            <WhatsappShareButton
              url={window.location.href}
              title={"Hey, Check out \n"}
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </WhatsAppBtn>
          <LikeBtnWrapper>
            {wishlist.includes(product._id) ? (
              <FcLike
                size={32}
                key={product.id}
                onClick={() => handleLikeButton(product._id)}
              ></FcLike>
            ) : (
              <AiOutlineHeart
                size={32}
                onClick={() => handleLikeButton(product._id)}
              ></AiOutlineHeart>
            )}
          </LikeBtnWrapper>
        </WebsiteBtnWrapper>

        <CustomerComments
          websiteDetails={websiteDetail}
          productDetails={product}
          setLoginModal={setLoginModal}
        ></CustomerComments>

        {showFeedbackModal ? (
          <FeedbackModal
            setShowFeedbackModal={setShowFeedbackModal}
            setShowThanksModal={setShowThanksModal}
          />
        ) : null}

        {showThanksModal ? (
          <ThanksModal
            setShowThanksModal={setShowThanksModal}
            url={product.url}
          />
        ) : null}
      </ProductDetailsContainer>
    </ProductContainer>
  );
};

export default ProductDescription;
