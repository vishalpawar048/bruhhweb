import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  ImgContainer,
  LikeBtnWrapper,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductsCard,
  ProductsContainer,
  ProductsImg,
  ProductsWrapper,
  ProductWebsite,
} from "../Products/ProductsElements";
import {
  getWishList,
  addToWishlist,
  removefromWishlist,
} from "../../services/wishlist";
import LoginModal from "../Login/LoginModal";

const Wishlist = (props) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [loginModal, setLoginModal] = useState(false);
  let emailId = localStorage.getItem("email");
  useEffect(() => {
    async function getWishlist() {
      if (emailId) {
        let wishlistArr = await getWishList(emailId);
        let productIds = [];
        wishlistArr.map((ele) => {
          productIds.push(ele._id);
        });
        setWishlistIds([...productIds]);
        setWishlist([...wishlistArr]);
      }
    }
    getWishlist();
  }, [emailId]);

  const handleLikeButton = async (productId) => {
    if (emailId) {
      if (wishlistIds.includes(productId)) {
        const index = wishlistIds.indexOf(productId);
        if (index > -1) {
          wishlistIds.splice(index, 1);
        }

        setWishlistIds([...wishlistIds]);
        removefromWishlist(emailId, productId);
      } else {
        wishlistIds.push(productId);
        setWishlistIds([...wishlistIds]);
        try {
          addToWishlist(emailId, productId);
        } catch (error) {}
      }
    } else {
      setLoginModal(true);
    }
  };
  return (
    <ProductsContainer>
      {!emailId ? <LoginModal openModal={true} model={true} /> : null}

      <ProductsWrapper>
        {wishlist.map((product, i) => {
          return (
            <ProductsCard key={product._id}>
              <ImgContainer>
                <Link
                  to={{
                    pathname: `/products/${product.category}/${product.subCategory}/${product._id}`,
                    //   pageNo: pageNo, // your data array of objects
                  }}
                >
                  <ProductsImg
                    src={product ? product.imgUrls[0] : ""}
                    alt={product.name ? product.name : ""}
                  ></ProductsImg>
                </Link>
              </ImgContainer>

              <ProductInfoContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>₹ {product.price}</ProductPrice>
                <ProductWebsite>
                  {product.website}
                  <LikeBtnWrapper>
                    {wishlistIds.includes(product._id) ? (
                      <FcLike
                        key={product._id}
                        onClick={() => handleLikeButton(product._id)}
                      ></FcLike>
                    ) : (
                      <AiOutlineHeart
                        onClick={() => handleLikeButton(product._id)}
                      ></AiOutlineHeart>
                    )}
                  </LikeBtnWrapper>
                </ProductWebsite>
              </ProductInfoContainer>
            </ProductsCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
export default Wishlist;
