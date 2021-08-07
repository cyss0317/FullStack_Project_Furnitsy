import {connect} from "react-redux";
import ProductIndex from "./product_Index"
import { ThunkReceiveProducts } from "../../actions/product_actions"; 


const mSTP = (state) => {

    const products = Object.values(state.entities.products)

    let couchAndSofa = products.filter((product) => (
        product.category === "Couch and Sofa"
    ))
    debugger
    let randomItem = [];
    {
        // debugger
        for (let i = 0; i < 6; i++) {
            randomItem.push(products[Math.floor(Math.random() * products.length)])
        }
    }
    


    return ({
        //IMPORTANT 
        //I completely forgot to change object into a form of an array
        products: Object.values(state.entities.products),
        couchAndSofa: couchAndSofa,
        randomitem: randomItem
    })
}

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(ThunkReceiveProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)

// export default connect(mSTP, mDTP)(ProductIndex)

// ProductIndex(presentational)
//     product_index_container
//     product_index_item_container
// ProductShow(presentational)
//     product_show_container