import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { login, signup } from "../actions/session_actions";
import { openModal, closeModal } from "../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Login",
});

const mDTP = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    otherForm: (
      <button
        className="session-form-submit"
        onClick={() => dispatch(openModal("Sign Up"))}
      >
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
