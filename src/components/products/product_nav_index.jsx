import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import { useCSS } from "../../CSS/hooks";
class ProductNavIndex extends React.Component {
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
    let currentCategory = categoryName
      .split(" ")
      .map((word, index) => {
        return index === 0
          ? word.toLowerCase()
          : word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    let index = categories_selector.indexOf(eval(currentCategory));

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
