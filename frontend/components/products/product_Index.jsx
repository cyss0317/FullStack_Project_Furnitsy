import React from "react";
import ProductIndexItem from "./product_index_item";
import RecentlyViewItemIndex from "./recently_view_item_index";
import { withRouter } from "react-router";
import ReactLoading from "react-loading";
import ClipLoader from "react-spinners/ClipLoader";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomItem10: [],
    };
  }

  componentDidMount() {
    this.props.fetchProducts().then((products) => {
      let productsArr = Object.values(products.products);
      let temp = [];
      while (temp.length < 10) {
        let random =
          productsArr[Math.floor(Math.random() * productsArr.length)];
        if (!temp.includes(random)) {
          temp.push(random);
        }
      }
      this.setState({ randomItem10: temp });
    });
  }

  render() {
    const {
      products,
      couchAndSofa,
      coffeeTable,
      recentlyViews,
      outdoor,
      diningTable,
      diningChairs,
      kidsBunkBed,
      accentChairs,
    } = this.props;
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

export default withRouter(ProductIndex);
