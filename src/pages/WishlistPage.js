import React, { useState } from "react";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";
import Wishlist from "../componants/Wishlist/Wishlist";
import Sidebar from "../componants/Sidebar";

function ProductsPage(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Wishlist />
      <Footer />
    </>
  );
}

export default ProductsPage;
