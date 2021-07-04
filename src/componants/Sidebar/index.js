import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  LoginBtn,
} from "./SidebarElements";
import LoginModal from "../Login/LoginModal";
import LogOutModal from "../Login/LogOutModal";

const Sidebar = ({ isOpen, toggle }) => {
  const [model, setModel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("email") ? true : false
  );
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const loginBtn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

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

  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/products/men">Men</SidebarLink>
          <SidebarLink to="/products/women">Women</SidebarLink>
          <SidebarLink to="/products/gifts">Gifts</SidebarLink>
          <SidebarLink to="/wishlist">Wishlist</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <LoginBtn onClick={checklogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </LoginBtn>

          {openLoginModal ? (
            <LoginModal model={true} loginBtn={loginBtn} />
          ) : null}
          {openLogOutModal ? (
            <LogOutModal model={true} loginBtn={loginBtn} />
          ) : null}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
