import React from "react";
import ProductNavShowList from "../products/product_nav_show_list";
import { Link } from "react-router-dom";
import { Product } from "../products/types";

interface SearchBarProps {
  products: Array<Product>;
  keyword: string;
  filteredByState: Array<Product>;
  receiveProducts: () => any;
}

interface SearchBarStates {
  color: string;
  bed: string;
  table: string;
  outdoor: string;
  couch: string;
  filteredByState: Array<Product>;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarStates> {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      bed: "",
      table: "",
      outdoor: "",
      couch: "",
      filteredByState: [],
    };
  }

  componentDidMount() {
    this.props.receiveProducts();
  }

  filterByState(field, e) {
    let filteredProducts: Array<Product> = [];
    // this.setState({ [field]: e.currentTarget.value });
    // filteredProducts.forEach((product) => {
    //   if (
    //     product.color === this.state.field &&
    //     !this.props.filteredByState.includes(product)
    //   ) {
    //     this.props.filteredByState.push(product);
    //   }
    // });
  }

  render() {
    const { products, keyword } = this.props;
    if (products === undefined) return null;
    let keywords = keyword.split(" ");
    let filteredProducts: Array<Product> = [];
    let productsByColor: Array<Product> = [];
    let productsByBed: Array<Product> = [];
    let productsByCouch: Array<Product> = [];
    let productsBySofa: Array<Product> = [];
    let productsByOutdoor: Array<Product> = [];
    let productsByTable: Array<Product> = [];

    products.forEach((product) => {
      let item = product;
      keywords.forEach((word) => {
        let byName = product.name.toLowerCase().includes(word.toLowerCase());
        let byColor = product.color.toLowerCase().includes(word.toLowerCase());
        if (
          byName &&
          byName !== byColor &&
          !filteredProducts.includes(product)
        ) {
          filteredProducts.push(product);
        } else if (
          byColor &&
          byColor !== byName &&
          !filteredProducts.includes(product)
        ) {
          filteredProducts.push(product);
        } else {
          ("");
        }
      });
      return filteredProducts;
    });

    return filteredProducts.length > 0 ? (
      <section>
        <div>
          <div className="nav-static">
            {filteredProducts.map((product) => {
              return <ProductNavShowList product={product} />;
            })}
          </div>
        </div>
      </section>
    ) : this.props.filteredByState ? (
      <section>
        <div>
          <form>
            <label htmlFor="">
              by Gray
              <input
                type="radio"
                value={this.state.color}
                onClick={(e) => this.filterByState("color", e)}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
        <div>
          <div className="nav-static">
            {this.props.filteredByState.map((product) => {
              return <ProductNavShowList product={product} />;
            })}
          </div>
        </div>
      </section>
    ) : (
      <div>
        <Link to="/">There are no products matching your search keywords</Link>
      </div>
    );
  }
}
export default SearchBar;
