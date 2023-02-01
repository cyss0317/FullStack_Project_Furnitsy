import { connect } from "react-redux";
import ProductIndex from "./product_Index";
import { ThunkReceiveProducts } from "../../actions/product_actions";
import { Product } from "./types";

const mSTP = (state) => {
  const products = Object.values(state.entities.products) as Array<Product>;

  const couchAndSofa = products.filter(
    (product) => product.category === "Couch and Sofa"
  );
  const outdoor = products.filter((product) => product.category === "Outdoor");
  const diningTable = products.filter(
    (product) => product.category === "Dining Table"
  );
  const coffeeTable = products.filter(
    (product) => product.category === "Coffee Table"
  );
  const kidsBunkBed = products.filter(
    (product) => product.category === "Kids Bunk Bed"
  );
  const accentChairs = products.filter(
    (product) => product.category === "Accent Chairs"
  );
  const diningChairs = products.filter(
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
