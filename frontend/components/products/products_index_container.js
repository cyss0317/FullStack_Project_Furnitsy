import {connect} from "react-redux";
import ProductIndex from "./product_Index"
import { ThunkReceiveProducts } from "../../actions/product_actions"; 


const mSTP = (state) => {
    debugger
    return ({
        products: state.entities.products
    })
}

const mDTP = dispatch => ({
    receiveProducts: products => dispatch(ThunkReceiveProducts(products))
})

export default connect(mSTP, mDTP)(ProductIndex)

// export default connect(mSTP, mDTP)(ProductIndex)

// ProductIndex(presentational)
//     product_index_container
//     product_index_item_container
// ProductShow(presentational)
//     product_show_container