import React from "react";
import GoogleLogin from "react-google-login";
import Modal from "react-modal";
import { LogInBtnWrapper, CancleBtn, OkBtn } from "./LoginElement";
import { saveUserDetail } from "../../services/user";

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

function LoginModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(props.model);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const onSuccess = async (res) => {
    localStorage.setItem("email", res.profileObj.email);
    localStorage.setItem("name", res.profileObj.givenName);
    if (props.loginBtn) {
      props.loginBtn(false);
    }
    setShowSuccess(true);
    closeModal();
    try {
      await saveUserDetail(res.profileObj.email, res.profileObj.givenName);
    } catch (error) {
      closeModal();
    }
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  function closeModal() {
    window.location.reload();
    setTimeout(() => {
      setIsOpen(false);
      props.closeBtn();
    }, 1500);
  }

  function cancelModal() {
    setIsOpen(false);
    if (props.closeBtn) {
      props.closeBtn();
    } else if (props.setLoginModal) {
      props.setLoginModal(false);
    }
  }



  return (
    <div>
      {showSuccess ? (
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <LogInBtnWrapper>
            <div>Login Successful</div>
          </LogInBtnWrapper>
          <OkBtn onClick={closeModal}>Ok</OkBtn>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <LogInBtnWrapper>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
           
              isSignedIn={true}
            />
          </LogInBtnWrapper>
          <div> {showSuccess ? "Login Successful" : null}</div>
          <CancleBtn onClick={cancelModal}>Cancel</CancleBtn>
        </Modal>
      )}
    </div>
  );
}

export default LoginModal;
