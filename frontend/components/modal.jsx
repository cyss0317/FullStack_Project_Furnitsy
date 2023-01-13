import { connect } from "react-redux";
import { closeModal } from "../actions/modal_actions";
import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "Login":
      component = <LoginFormContainer />;
      break;
    case "Sign Up":
      component = <SignupFormContainer />;
      break;
    case "Added":
      component = (
        <div className="session-container">
          <div className="x-closing-button" onClick={closeModal}>&#215;</div>
          <div>This item has been added to the cart.</div>
          {/* <section className="modal-screen"></section> */}
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Modal);
