import { connect } from "react-redux";
import { ThunkReceiveProducts } from "../../actions/products/product_actions";
import SearchBar from "./search_bar.jsx";

const mSTP = (state, ownProps) => ({
  products: Object.values(state.entities.products),
  keyword: ownProps.match.params.keyword,
});

const mDTP = (dispatch) => ({
  receiveProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(SearchBar);