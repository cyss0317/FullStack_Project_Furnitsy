import {connect} from "react-redux";
import { ThunkReceiveProducts } from "../../actions/product_actions";
import  SearchBar  from "./search_bar";

const mSTP = (state) => ({
    products: state.entities.products
})

const mDTP = (dispatch) => ({
    receiveProducts: () => dispatch(ThunkReceiveProducts())
})


export default connect(mSTP, mDTP)(SearchBar)