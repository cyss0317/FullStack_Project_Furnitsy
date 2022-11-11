import React from "react";
import { Link } from "react-router-dom";

const CategoryNavBar = (props, params) => {
  // const products = props.products;
  const categories = [
    "Couch and Sofa",
    "Dining Table",
    "Beds",
    "Accent Chairs",
    "Dining Chairs",
    "Outdoor Furniture",
  ];

  function changeBackground() {}
  return (
    <nav className="nav-container">
      {categories.map((category, index) => (
          <Link
            key={index}
            className="shadow-bottom"
            id="nav-bar-tag"
            onClick={changeBackground}
            to={`/category/${category}`}
          >
            {category}
          </Link>
      ))}
    </nav>
  );
};

export default CategoryNavBar;
