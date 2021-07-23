import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  margin: 5px;
`;

export const MainQuetion = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.25rem;

  justify-content: center;
  text-align: center;
  color: palevioletred;
`;

export const RatingTitle = styled.div`
  font-size: 1rem;
  justify-content: center;
  text-align: center;
  color: palevioletred;
`;

export const ButtonWrapper = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 10px;
`;

export const InstaLink = styled.a`
  /* justify-content: center;
  text-align: center;
  padding-bottom: 10px; */
  text-align: center;
  color: #d70068;
  font-size: 2.5rem;
  margin-bottom: 10px; 
`;

export const RatingWrapper = styled.div`
  justify-content: center;
  text-align: center;
  margin: 20px;
  /* padding-bottom:10px; */
  /* width:0; */
`;

export const FeedbackWrapper = styled.div`
  justify-content: center;
  text-align: center;
  /* padding-bottom: 10px;
  margin-bottom: 15px; */
`;

export const Input = styled.textarea`
  padding: 0.5em;
  /* margin: 0.5em; */
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 90%;
`;

export const Button = styled.button`
  background: ${(props) => {
    if (props.selected) {
      return "#d70068";
    } else {
      return "transparent";
    }
  }};

  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const SubmitBtn = styled.button`
  background: #d70068;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 30%;
`;
export const SubmitBtnWrapper = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
