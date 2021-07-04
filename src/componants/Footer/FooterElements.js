import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #f06292;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWraper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  //    align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkSocial = styled.a`
  font-size: 0.8rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  // height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #91001b;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #fff;
    color: #91001b;
    text-decoration: none;
  }
`;

export const FooterLinkTitle = styled(Link)`
  font-size: 0.8rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #91001b;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #fff;
    color: #91001b;
    text-decoration: none;
  }
`;

export const FooterLink = styled.div`
  color: #91001b;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  padding: 0 1rem;

  &.hover {
    color: #91001b;
    transition: 0.3s ease-out;
    text-decoration: none;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: "Sacramento", cursive;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ab0153;
    text-decoration: none;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
export const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
