import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import { Product } from "./types";

interface ProductNavIndexProps {
  products: Array<Product>;
  couchAndSofa: Array<Product>;
  outdoorFurniture: Array<Product>;
  diningTable: Array<Product>;
  coffeeTable: Array<Product>;
  beds: Array<Product>;
  accentChairs: Array<Product>;
  diningChairs: Array<Product>;
  categoryName: any;
  fetchProducts: any;
}

class ProductNavIndex extends React.Component<ProductNavIndexProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
      categoryName,
      couchAndSofa,
      outdoorFurniture,
      diningChairs,
      diningTable,
      coffeeTable,
      beds,
      accentChairs,
    } = this.props;
    const categories_selector = [
      couchAndSofa,
      diningTable,
      coffeeTable,
      outdoorFurniture,
      beds,
      accentChairs,
      diningChairs,
    ];
    const currentCategory = categoryName
      .split(" ")
      .map((word, index) => {
        return index === 0
          ? word.toLowerCase()
          : word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    const index = categories_selector.indexOf(eval(currentCategory));

    if (categories_selector[index] === undefined) {
      return null;
    }
    return (
      <div>
        <ul className="nav-static">
          {categories_selector[index].map((product) => {
            return <ProductNavShowList key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductNavIndex;
