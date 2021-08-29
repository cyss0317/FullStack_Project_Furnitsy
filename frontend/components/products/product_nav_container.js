import { connect } from "react-redux";
import ProductNavIndex from "./product_nav_index"
import { ThunkReceiveProducts } from "../../actions/product_actions";


const mSTP = (state, ownProps) => {

    const products = Object.values(state.entities.products)

    let couchAndSofa = products.filter((product) => (
        product.category === "Couch and Sofa"
    ))
    let outdoorFurniture = products.filter((product) => (
        product.category === "Outdoor Furniture"
    ))
    let diningTable = products.filter((product) => (
        product.category === "Dining Table"
    ))
    let coffeeTable = products.filter((product) => (
        product.category === "Coffee Table"
    ))
    let beds = products.filter((product) => (
        product.category === "Beds"
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
        outdoorFurniture: outdoorFurniture,
        // // randomitem: randomItem
        diningTable: diningTable,
        coffeeTable: coffeeTable,
        beds: beds,
        accentChairs: accentChairs,
        diningChairs: diningChairs,
        categoryName: ownProps.match.params.category

    })
}

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(ThunkReceiveProducts())
})

export default connect(mSTP, mDTP)(ProductNavIndex)

// export default connect(mSTP, mDTP)(ProductIndex)

// ProductIndex(presentational)
//     product_index_container
//     product_index_item_container
// ProductShow(presentational)
//     product_show_container