import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcon,
  FooterLinkSocial,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
         
          <FooterLinkItems>
            <FooterLink>Women</FooterLink>
            <FooterLinkTitle to="/products/women/dresses">
              Dresses
            </FooterLinkTitle>
            <FooterLinkTitle to="/products/women/t-shirts">
              T-shirts
            </FooterLinkTitle>
            <FooterLinkTitle to="/products/women/tops">Tops</FooterLinkTitle>
            <FooterLinkTitle to="/products/women/shoes">Shoes</FooterLinkTitle>
            <FooterLinkTitle to="/products/women/jacket-hoodies">
              Jackets
            </FooterLinkTitle>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink to="/aboutUs">Men</FooterLink>
            <FooterLinkTitle to="/products/men/shirts">Shirts</FooterLinkTitle>
            <FooterLinkTitle to="/products/men/t-shirts">
              T-shirts
            </FooterLinkTitle>
            <FooterLinkTitle to="/products/men/shoes">Shoes</FooterLinkTitle>
            <FooterLinkTitle to="/products/men/jacket-hoodies">
              Jackets
            </FooterLinkTitle>
            <FooterLinkTitle to="/products/men/bags">Bags</FooterLinkTitle>
          </FooterLinkItems>
          {/* <FooterLinksWraper> */}
          <FooterLinkItems>
            <FooterLink to="/aboutUs">Be in Touch</FooterLink>
            <FooterLinkSocial
              href="https://www.instagram.com/bruhh_fashion/"
              target="_blank"
            >
              Instagram
            </FooterLinkSocial>
            <FooterLinkSocial
              href="https://www.facebook.com/Bruhh_fashion-104278008278589/"
              target="_blank"
            >
              Facebook
            </FooterLinkSocial>
            <FooterLinkTitle to="/aboutUs">About bruhh!..</FooterLinkTitle>
          </FooterLinkItems>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <h1>
              <SocialLogo to="/">bruhh!</SocialLogo>
            </h1>
            <WebsiteRights>Bruhh © 2021 All rights are reserved</WebsiteRights>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/Bruhh_fashion-104278008278589/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/bruhh_fashion/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
