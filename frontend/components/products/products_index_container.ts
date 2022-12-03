import { connect } from "react-redux";
import ProductIndex from "./product_Index.js";
import { ThunkReceiveProducts } from "../../actions/products/product_actions";

const mSTP = (state, window) => {
  const products = Object.values(state.entities.products);

  let couchAndSofa = products.filter(
    (product) => product.category === "Couch and Sofa"
  );
  let outdoor = products.filter((product) => product.category === "Outdoor");
  let diningTable = products.filter(
    (product) => product.category === "Dining Table"
  );
  let coffeeTable = products.filter(
    (product) => product.category === "Coffee Table"
  );
  let kidsBunkBed = products.filter(
    (product) => product.category === "Kids Bunk Bed"
  );
  let accentChairs = products.filter(
    (product) => product.category === "Accent Chairs"
  );
  let diningChairs = products.filter(
    (product) => product.category === "Dining Chairs"
  );

  return {
    products: state.entities.products,
    couchAndSofa: couchAndSofa,
    outdoor: outdoor,
    diningTable: diningTable,
    coffeeTable: coffeeTable,
    kidsBunkBed: kidsBunkBed,
    accentChairs: accentChairs,
    diningChairs: diningChairs,
  };
};

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(ProductIndex);
