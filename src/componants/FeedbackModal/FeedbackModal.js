import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Conatiner,
  ButtonWrapper,
  MainQuetion,
  RatingWrapper,
  Input,
  FeedbackWrapper,
  SubmitBtn,
  SubmitBtnWrapper,
  RatingTitle,
  InstaLink,
} from "./FeedbackModalElements";
import HoverRating from "../CustomerRating/CustomerRating";
import { FaInstagram } from "react-icons/fa";
import { userFeedback } from "../../services/getComments";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const FeedbackModal = ({ setShowFeedbackModal, setShowThanksModal }) => {
  const [bruhhRating, setBruhhRating] = useState("0");
  // const [likeed, setLiked] = useState("");
  const [selected, setSelected] = useState();
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const classes = useStyles();

  async function handleClose() {
    setShowFeedbackModal(false);
    setShowThanksModal(true);
    localStorage.setItem("feedback", true);

    try {
      let obj = {
        rating: bruhhRating,
        feedback: feedbackMsg,
        liked: selected === 2 ? "Yes" : "Not Really",
      };
      await userFeedback(obj);
    } catch (error) {}
  }

  const getValue = (name, value) => {
    setBruhhRating(value);
  };

  const handleFeedback = (event) => {
    setFeedbackMsg(event.target.value);
  };

  return (
    <Modal
      //   aria-labelledby="transition-modal-title"
      //   aria-describedby="transition-modal-description"
      className={classes.modal}
      open={true}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        {/* <div className={classes.paper}> */}
        <Conatiner>
          {/* <h3 id="transition-modal-title"> */}
          <MainQuetion>Hey, Do you find Bruhh.in helpful?</MainQuetion>
          {/* </h3> */}
          <ButtonWrapper>
            <Button
              selected={selected === 1 ? true : false}
              onClick={() => setSelected(1)}
            >
              Not Really
            </Button>
            <Button
              selected={selected === 2 ? true : false}
              onClick={() => setSelected(2)}
            >
              Yes
            </Button>
          </ButtonWrapper>
          <RatingWrapper>
            <RatingTitle>Please Rate Us</RatingTitle>
            <HoverRating name="bruhhRating" getValue={getValue} />
          </RatingWrapper>
          <FeedbackWrapper>
            <Input
              placeholder="Any Feedback/Suggestions?"
              rows="3"
              onChange={handleFeedback}
            ></Input>
          </FeedbackWrapper>
          <InstaLink
            href="https://www.instagram.com/bruhh_fashion/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </InstaLink>
          <SubmitBtnWrapper>
            <SubmitBtn onClick={handleClose}>Done</SubmitBtn>
          </SubmitBtnWrapper>
          {/* <p id="transition-modal-description">
            react-transition-group animates me.
          </p> */}
        </Conatiner>
        {/* </div> */}
      </Fade>
    </Modal>
  );
};

export default FeedbackModal;
