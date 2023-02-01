import { connect } from "react-redux";
import ProductNavIndex from "./product_nav_index";
import { ThunkReceiveProducts } from "../../actions/product_actions";
import { Product } from "./types";

const mSTP = (state, ownProps) => {
  const products = Object.values(state.entities.products) as Array<Product>;

  const couchAndSofa = products.filter(
    (product) => product.category === "Couch and Sofa"
  );
  const outdoorFurniture = products.filter(
    (product) => product.category === "Outdoor Furniture"
  );
  const diningTable = products.filter(
    (product) => product.category === "Dining Table"
  );
  const coffeeTable = products.filter(
    (product) => product.category === "Coffee Table"
  );
  const beds = products.filter((product) => product.category === "Beds");
  const accentChairs = products.filter(
    (product) => product.category === "Accent Chairs"
  );
  const diningChairs = products.filter(
    (product) => product.category === "Dining Chairs"
  );

  return {
    products: products,
    couchAndSofa: couchAndSofa,
    outdoorFurniture: outdoorFurniture,
    diningTable: diningTable,
    coffeeTable: coffeeTable,
    beds: beds,
    accentChairs: accentChairs,
    diningChairs: diningChairs,
    categoryName: ownProps.match.params.category,
  };
};

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(ThunkReceiveProducts()),
});

export default connect(mSTP, mDTP)(ProductNavIndex);
