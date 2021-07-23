import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Conatiner, MainQuetion } from "./FeedbackModalElements";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ThanksModal = ({ setShowThanksModal, url }) => {
  const classes = useStyles();

  setTimeout(() => {
    setShowThanksModal(false);
    window.open(url, "_blank");
  }, 1500);

  const handleClose = () => {
 
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
        <Conatiner>
          {/* <h3 id="transition-modal-title"> */}
          <MainQuetion>Thank You So much.. :)❤️</MainQuetion>
        </Conatiner>
        {/* </div> */}
      </Fade>
    </Modal>
  );
};

export default ThanksModal;
