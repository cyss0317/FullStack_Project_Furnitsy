import { connect } from "react-redux";
import ProductNav from "./product_nav_index"
import { ThunkReceiveProducts } from "../../actions/product_actions";


const mSTP = (state) => {

    const products = Object.values(state.entities.products)

    let couchAndSofa = products.filter((product) => (
        product.category === "Couch and Sofa"
    ))
    let outdoor = products.filter((product) => (
        product.category === "Outdoor"
    ))
    let diningTable = products.filter((product) => (
        product.category === "Dining Table"
    ))
    let coffeeTable = products.filter((product) => (
        product.category === "Coffee Table"
    ))
    let kidsBunkBed = products.filter((product) => (
        product.category === "Kids Bunk Bed"
    ))
    let accentChairs = products.filter((product) => (
        product.category === "Accent Chairs"
    ))
    let diningChairs = products.filter((product) => (
        product.category === "Dining Chairs"
    ))



    return ({
        //IMPORTANT 
        //I completely forgot to change object into a form of an array
        products: products,
        couchAndSofa: couchAndSofa,
        outdoor: outdoor,
        // // randomitem: randomItem
        diningTable: diningTable,
        coffeeTable: coffeeTable,
        kidsBunkBed: kidsBunkBed,
        accentChairs: accentChairs,
        diningChairs: diningChairs
    })
}

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(ThunkReceiveProducts())
})

export default connect(mSTP, mDTP)(ProductNav)

// export default connect(mSTP, mDTP)(ProductIndex)

// ProductIndex(presentational)
//     product_index_container
//     product_index_item_container
// ProductShow(presentational)
//     product_show_container