import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { debounce } from "../../utils/debounce";

import {
  Nav,
  NavbarComponant,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  WishListBtnWrapper,
  LogInBtn,
} from "./NavbarElements";
import LoginModal from "../Login/LoginModal";
import LogOutModal from "../Login/LogOutModal";

const Navbar = ({ toggle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [model, setModel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("email") ? true : false
  );
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const checklogin = () => {
    if (localStorage.getItem("email")) {
      setIsLoggedIn(true);
      setOpenLogOutModal(true);
      setOpenLoginModal(false);
    } else {
      setIsLoggedIn(false);

      setOpenLoginModal(true);
      setOpenLogOutModal(false);
    }

    setModel(!model);
  };

  const loginBtn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  const closeBtn = () => {
    setOpenLogOutModal(false);
    setOpenLoginModal(false);
  };
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <>
      <Nav active={visible}>
        <NavbarComponant>
          <NavLogo to="/">bruhh!</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars></FaBars>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/products/men">Men</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products/women">Women</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products/gifts">Gifts</NavLinks>
            </NavItem>
          
          </NavMenu>

          <NavBtn>
            <WishListBtnWrapper>
              <NavLinks to="/wishlist">Wishlist</NavLinks>
            </WishListBtnWrapper>
            <LogInBtn onClick={checklogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </LogInBtn>
          </NavBtn>

          {openLoginModal ? (
            <LoginModal model={true} loginBtn={loginBtn} closeBtn={closeBtn} />
          ) : null}
          {openLogOutModal ? (
            <LogOutModal model={true} loginBtn={loginBtn} closeBtn={closeBtn} />
          ) : null}
        </NavbarComponant>
      </Nav>
    </>
  );
};

export default Navbar;
