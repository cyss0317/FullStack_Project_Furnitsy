import React from "react";
import ProductIndexItem from "./product_index_item";
import RecentlyViewItemIndexProps from "./recently_view_item_index";
import { withRouter } from "react-router";
import ReactLoading from "react-loading";
import ClipLoader from "react-spinners/ClipLoader";
import { Product } from "./types";

interface ProductIndexProps {
  accentChairs: Array<Product>;
  coffeeTable: Array<Product>;
  couchAndSofa: Array<Product>;
  diningChairs: Array<Product>;
  diningTable: Array<Product>;
  products: Array<Product>;
  fetchProducts: () => void;
}

interface ProductIndexState {
  randomItem10: Array<Product>;
}

class ProductIndex extends React.Component<
  ProductIndexProps,
  ProductIndexState
> {
  constructor(props) {
    super(props);
    this.state = {
      randomItem10: [],
    };
  }

  componentDidMount() {
    // @ts-ignore
    this.props.fetchProducts().then(() => {
      let productsArr = Object.values(this.props.products);
      let temp: Array<Product> = [];
      while (temp.length < 10) {
        let random = productsArr[
          Math.floor(Math.random() * productsArr.length)
        ] as Product;
        if (!temp.includes(random)) {
          temp.push(random);
        }
      }
      this.setState({ randomItem10: temp });
    });
  }

  render() {
    const { couchAndSofa } = this.props;
    return (
      <div className="index-main-container">
        <div className="products-index-container">
          {!this.state.randomItem10.length ? (
            <ClipLoader
              color="white"
              loading={true}
              size="15rem"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              <h2 className="index-container-logo">
                Furnitures made just for you.
              </h2>
              <p className="best-selling-items">Best selling items</p>
              <ul className="products-index-container-ul">
                {couchAndSofa.map((product) => (
                  <ProductIndexItem product={product} key={product.id} />
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="recently-viewed-container">
          <div id="recently-words">
            <p>
              What other people are checking out <span>&amp;</span> more
            </p>
          </div>
          <ul className="recently-viewed-items">
            {this.state.randomItem10.map((product) => (
              <RecentlyViewItemIndex product={product} key={product.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
// @ts-ignore
export default withRouter(ProductIndex);
