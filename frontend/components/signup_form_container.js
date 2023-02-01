import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { signup, login } from "../actions/session_actions";
import { openModal, closeModal } from "../actions/modal_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Sign up",
});

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(signup(user)),
    otherForm: (
      <button
        className="session-form-submit"
        onClick={() => dispatch(openModal("Login"))}
      >
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
