import React, { useState, Suspense } from "react";
import Navbar from "../componants/Navbar";
import Sidebar from "../componants/Sidebar";
import CarouselBanners from "../componants/Carousel/CarouselBanners";
import SlidingBanner from "../componants/SlidingBanner/SlidingBanner";


const MiddleBanner = React.lazy(() =>
  import("../componants/middleBanner/MiddleBanner")
);
const SquareBanner = React.lazy(() =>
  import("../componants/SquareBanner/SquareBanner")
);
const Footer = React.lazy(() => import("../componants/Footer"));

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CarouselBanners width={width} />
      <SlidingBanner width={width} />
      <Suspense fallback={<div></div>}>
        <MiddleBanner width={width} />
        <SquareBanner width={width} />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
