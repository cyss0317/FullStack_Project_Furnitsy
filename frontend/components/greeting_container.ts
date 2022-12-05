import { connect } from "react-redux";
import Greeting from "./greeting.jsx";
import { logout } from "../actions/sessions/session_actions";
import { openModal } from "../actions/modal/modal_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    horizontal: ownProps.horizontal,
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Greeting);