import React, { useState, useEffect, useRef, useCallback } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductsCard,
  ProductsImg,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductWebsite,
  ImgContainer,
  FilterButtonContainer,
  FilterButton,
  LikeBtnWrapper,
} from "./ProductsElements";
import useGetProducts from "../../services/getProducts";
import Filter from "../Filter/Filter";
import { deleteProductById } from "../../services/getProductById";
import {
  getWishList,
  addToWishlist,
  removefromWishlist,
} from "../../services/wishlist";
import LoginModal from "../Login/LoginModal";

const Products = (props) => {
  let category = props.params.category;
  let type = props.params.type ? props.params.type : "";
  let isAdmin = props.params.admin === "brAdmin" ? true : false;
  let emailId = localStorage.getItem("email");
  let prevPageNo = localStorage.getItem("pageNo");
  let [pageNo, setPageNo] = useState(prevPageNo ? prevPageNo : 1);
  const [selectedSites, setSelectedSites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState(0);
  const [loginModal, setLoginModal] = useState(false);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  let prevCatagory = usePrevious(category);
  let prevType = usePrevious(type);

  let { loading, hasMoreProduct, productsArray } = useGetProducts(
    category,
    type,
    pageNo,
    selectedSites,
    sort
  );

  const deleteProduct = async (id) => {
    let res = await deleteProductById(id);
    if (res) {
      alert("Product Deleted Successfuly", res.name);
    }
  };

  useEffect(() => {
    if (prevCatagory !== category || prevType !== type) {
      setPageNo(1);
      window.scrollTo(0, 0);
    }
  }, [selectedSites]);

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

  const observer = useRef();
  const lastProduct = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreProduct) {
          setPageNo((previousPage) => previousPage + 1);
          localStorage.setItem("pageNo", pageNo);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMoreProduct]
  );

  /*Filter handling*/
  const [showFilter, setShowFilter] = useState(false);

  const openFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const selectedWebsites = (sites, sort) => {
    setShowFilter(false);
    setSelectedSites(sites);
    setSort(sort);
    setPageNo(1);
  };

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

  return (
    <ProductsContainer>
      {loginModal ? <LoginModal openModal={true} model={true} /> : null}
      <FilterButtonContainer>
        <FilterButton onClick={openFilter}>Filter</FilterButton>
      </FilterButtonContainer>
      <Filter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        category={category}
        type={type}
        selectedWebsites={selectedWebsites}
      />

      <ProductsWrapper>
        {productsArray.map((product, i) => {
          if (productsArray.length === i + 1) {
            return (
              <ProductsCard ref={lastProduct} key={product._id}>
                <ImgContainer>
                  <Link
                    to={{
                      pathname: `/products/${product.category}/${product.subCategory}/${product._id}`,
                      pageNo: pageNo, // your data array of objects
                    }}
                  >
                    <ProductsImg
                      src={product ? product.imgUrls[0] : ""}
                      alt=""
                    ></ProductsImg>
                  </Link>
                </ImgContainer>

                <ProductInfoContainer>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>₹ {product.price}</ProductPrice>
                  <ProductWebsite>
                    {product.website}
                    <LikeBtnWrapper>
                      {wishlist.includes(product._id) ? (
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
          } else {
            return (
              <ProductsCard key={product._id}>
                <ImgContainer>
                  {isAdmin ? (
                    <div
                      style={{ color: "red" }}
                      onClick={() => {
                        deleteProduct(product._id);
                      }}
                    >
                      delete
                    </div>
                  ) : (
                    ""
                  )}
                  <Link
                    to={{
                      pathname: `/products/${product.category}/${product.subCategory}/${product._id}`,
                      pageNo: pageNo, // your data array of objects
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
                      {wishlist.includes(product._id) ? (
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
          }
        })}
      </ProductsWrapper>
      <ProductsHeading>{loading ? "Loading..." : ""}</ProductsHeading>
    </ProductsContainer>
  );
};

export default Products;
