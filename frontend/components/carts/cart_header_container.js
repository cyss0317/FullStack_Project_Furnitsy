import { connect } from "react-redux";
import CartHeader from "./cart_header";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

export const mSTP = (state) => {
  return {
    items: state.entities.cartItems,
    currentUser: state.entities.users[state.session.id],
  };
};

export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(CartHeader);
