import { connect } from "react-redux";
import ProductNavIndex from "./product_nav_index";
import { ThunkReceiveProducts } from "../../actions/product_actions";

const mSTP = (state, ownProps) => {
  const products = Object.values(state.entities.products);

  let couchAndSofa = products.filter(
    (product) => product.category === "Couch and Sofa"
  );
  let outdoorFurniture = products.filter(
    (product) => product.category === "Outdoor Furniture"
  );
  let diningTable = products.filter(
    (product) => product.category === "Dining Table"
  );
  let coffeeTable = products.filter(
    (product) => product.category === "Coffee Table"
  );
  let beds = products.filter((product) => product.category === "Beds");
  let accentChairs = products.filter(
    (product) => product.category === "Accent Chairs"
  );
  let diningChairs = products.filter(
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
