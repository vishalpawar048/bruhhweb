import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import Modal from "react-modal";
import {  LogInBtnWrapper, CancleBtn } from "./LoginElement";

const clientId =
  "1016470868714-gpooa91tuu2adrnmufirslk9pc3riotq.apps.googleusercontent.com";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "30%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "none",
    transform: "translate(-50%, -50%)",
  },
};

function LogOutModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(props.model);

  const onSuccess = () => {
    localStorage.setItem("email", "");
    localStorage.setItem("name", "");
    if (props.loginBtn) {
      props.loginBtn(false);
    }
    window.location.reload();
    closeModal();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function cancelModal() {
    setIsOpen(false);
    if (props.closeBtn) {
      props.closeBtn();
    }
  }

  function onFail() {
    console.log("failed")
  }

  useEffect(() => {
    setIsOpen(props.model);
  }, [props.model]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <LogInBtnWrapper>
          {" "}
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            onFailure={onFail}
            isSignedIn={false}
          ></GoogleLogout>
        </LogInBtnWrapper>

        <CancleBtn onClick={cancelModal}>Cancel</CancleBtn>
      </Modal>
    </div>
  );
}

export default LogOutModal;
