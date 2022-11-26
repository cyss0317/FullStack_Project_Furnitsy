import * as React from "react";
import GreetingContainer from "../greeting_container";
import { Link } from "react-router-dom";
import { useWindowDimension } from "../../util/windowDimension";

const CategoryNavBar = (props, params) => {
  const { expand } = props;
  const { width } = useWindowDimension();
  const categories = [
    "Couch and Sofa",
    "Dining Table",
    "Beds",
    "Accent Chairs",
    "Dining Chairs",
    "Outdoor Furniture",
  ];
  const right = () => {
    if (width <= 450) {
      return "right-2vw";
    }
    if (width <= 650) {
      return "right-2rem";
    }
  };

  return (
    <nav
      hidden={true}
      className={
        props.horizontal ? "nav-horizontal" : `nav-vertical ${right()}`
      }
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          className="shadow-bottom"
          id="nav-bar-tag"
          to={`/category/${category}`}
        >
          {category}
        </Link>
      ))}
      {!props.horizontal && <GreetingContainer />}
    </nav>
  );
};

export default CategoryNavBar;
