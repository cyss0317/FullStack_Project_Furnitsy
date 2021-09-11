import {connect} from "react-redux";
import ProductIndex from "./product_Index"
import { ThunkReceiveProducts } from "../../actions/product_actions"; 


const mSTP = (state, window) => {

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
    
    
    // important to under stand!! 
    // 
    //question 4 why does it refresh
    
    // const randomItem10 = [];
    // if (products.length !== 0) {
        
    //     while (randomItem10.length < 10) {
    //         let random = products[Math.floor(Math.random() * products.length)]
    //         if (!randomItem10.includes(random)){
    //         randomItem10.push(random)}
    //     }
    // }
 


    return ({
        //IMPORTANT 
        //I completely forgot to change object into a form of an array
        products: state.entities.products,
        couchAndSofa: couchAndSofa,
        outdoor: outdoor,
        // randomItem10: randomItem10,
        diningTable: diningTable,
        coffeeTable: coffeeTable,
        kidsBunkBed: kidsBunkBed,
        accentChairs: accentChairs,
        diningChairs: diningChairs,

    })
}

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(ThunkReceiveProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)
