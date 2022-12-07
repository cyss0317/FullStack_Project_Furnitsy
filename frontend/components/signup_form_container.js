import { connect } from "react-redux";
import SessionForm from "./session_form.jsx";
import { signup, login } from "../actions/sessions/session_actions";
import { openModal, closeModal } from "../actions/modal/modal_actions";

const mSTP = (state, ownProps) => ({
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
