import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 90%;
  // height:75%;
  // background:rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5%;
  top: 15%;
  height: 75%;
  @media (max-width: 800px) {
    height: 80%;
    top: 10%;
  }
`;

export const FilterWrapper = styled.div`
  width: 50%;

  height: 95%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #f48fb1;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  top: 3%;
  @media screen and (max-width: 820px) {
    width: 90%;
    top: 1%;
  }
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  color: #141414;
  height: 100%;
  p {
    margin-bottom: 1rem;
  }

  // button{
  //     padding:10px 24px;
  //     background:#141414;
  //     color:#fff;
  //     border:none;
  // }
`;
export const FilterCloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const FilterTitle = styled.h6`
  display: flex;
  justify-content: center;
  padding: 1%;
  margin: 0;
`;

const RadioMark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
`;

export const RadioInput = styled.input`
  // position: absolute;
  // visibility: hidden;
  // display: none;
  margin-right: 5px;
  &:checked + ${RadioMark} {
    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: palevioletred;
      left: 2px;
      top: 15%;
      position: absolute;
    }
  }
`;

export const WebsiteList = styled.ul`
  height: 60%;
  overflow: hidden;
  overflow-y: scroll;
  text-align: center;

  @media (max-width: 420px) {
    // height: 70%;
    height: 60%;
  }
`;

export const RadioBtnWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const Btn = styled.div`
  max-width: 100%;
  padding: 4px 20px;
  border-radius: 25px;
  border: none;
  background: #ab0153;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const WebsiteListWrapper = styled.div`
  height: 75%;
`;

export const TitleWrapper = styled.div`
  margin-top: 90px;
`;

export const Radiolabel = styled.label`
  color: white;
`;

export const FilterButton = styled.button`
  background: ${(props) => (props.selected ? "#C2185B" : "#F48FB1")};
  color: white;
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
