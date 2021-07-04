import { useEffect, useState, useRef } from "react";

const useGetProducts = (category, type, pageNo, selectedSites, sort) => {
  let [loading, setLoading] = useState(true);
  let [productsArray, setproductsArray] = useState([]);
  let [hasMoreProduct, setHasMoreProduct] = useState(false);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  let prevCatagory = usePrevious(category);
  let prevType = usePrevious(type);
  let prevSelectedSits = usePrevious(selectedSites);

  useEffect(() => {
    setLoading(true);
    if (
      prevCatagory !== category ||
      prevType !== type ||
      prevSelectedSits !== selectedSites
    ) {
      setproductsArray([]);
      pageNo = 0;
    }
    fetch("https://bruhh.in:3001/products/getProductsByCategory", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        website: selectedSites,
        category: category,
        subCategory: type,
        page: pageNo,
        sort: sort,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        setproductsArray((previousProductsArray) => {
          if (pageNo === 1) {
            return [...data.Product];
          }
          return [...previousProductsArray, ...data.Product];
        });
        setLoading(false);
        setHasMoreProduct(data.Product.length > 0);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pageNo, category, selectedSites, sort]);

  return { loading, hasMoreProduct, productsArray };
};

export default useGetProducts;
