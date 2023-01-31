import * as React from "react";
import GreetingContainer from "../greeting_container";
import { Link } from "react-router-dom";

interface CategoryNavBar {
  expand: boolean;
  horizontal: boolean;
  right: string;
  setExpand: () => void;
}
const CategoryNavBar = (props: CategoryNavBar ) => {
  const { horizontal, setExpand } = props;
  const categories = [
    "Couch and Sofa",
    "Dining Table",
    "Beds",
    "Accent Chairs",
    "Dining Chairs",
    "Outdoor Furniture",
  ];


  return (
    <nav
      hidden={true}
      className={
        horizontal ? "nav-horizontal" : `nav-vertical right-1rem top-3_5`
      }
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          className="shadow-bottom"
          id="nav-bar-tag"
          onClick={setExpand}
          to={`/category/${category}`}
        >
          {category}
        </Link>
      ))}
      {!horizontal && <GreetingContainer horizontal={horizontal} />}
    </nav>
  );
};

export default CategoryNavBar;
