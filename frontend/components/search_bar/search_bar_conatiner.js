import {connect} from "react-redux";
import { ThunkReceiveProducts } from "../../actions/product_actions";
import  SearchBar  from "./search_bar";

const mSTP = (state, window) => ({
    products: state.entities.products,
    keyword: new URLSearchParams(window.location).get("s")
})

const mDTP = (dispatch) => ({
    receiveProducts: () => dispatch(ThunkReceiveProducts())
})


export default connect(mSTP, mDTP)(SearchBar)