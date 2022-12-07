import * as React from "react";
import GreetingContainer from "../greeting_container";
import { Link } from "react-router-dom";
import { useWindowDimension } from "../../util/windowDimension";

const CategoryNavBar = (props, params) => {
  const { horizontal, setExpand } = props;
  const { width } = useWindowDimension();
  const categories = [
    "Couch and Sofa",
    "Dining Table",
    "Beds",
    "Accent Chairs",
    "Dining Chairs",
    "Outdoor Furniture",
  ];
  const right = () =>
    React.useMemo(() => {
      {
        if (width <= 450) {
          return "right-1rem";
        }
        if (width <= 650) {
          return "right-1rem";
        }
      }
    }, [width]);

  return (
    <nav
      hidden={true}
      className={
        horizontal ? "nav-horizontal" : `nav-vertical ${right()} top-3_5`
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
