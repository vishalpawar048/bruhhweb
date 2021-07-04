import React, { useState } from "react";
import Navbar from "../componants/Navbar";
import Sidebar from "../componants/Sidebar";
import Footer from "../componants/Footer";
import ProductDescription from "../componants/ProductDescription/ProductDescription";

const ProductDescriptionPage = (props) => {
  const { _id } = props.match.params;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ProductDescription
        id={_id}
        params={props.match.params}
      />

      <Footer />
    </>
  );
};

export default ProductDescriptionPage;
