import { connect } from "react-redux";
import CartHeader from "./cart_header.jsx";
import { logout } from "../../actions/sessions/session_actions";
import { openModal } from "../../actions/modal/modal_actions";

export const mSTP = (state) => {
  // const allItems = Object.values(state.entities.cartItems)
  // let numberOfProducts = 0;
  // allItems.forEach((item) => numberOfProducts += item.quantity)

  return {
    items: state.entities.cartItems,
    // numberOfProducts: numberOfProducts,
    currentUser: state.entities.users[state.session.id],
  };
};

export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(CartHeader);