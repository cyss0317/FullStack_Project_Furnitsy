import React from "react";
import { Link } from "react-router-dom";
import { useCSS } from "../../CSS/hooks";
import { useWindowDimension } from "../../util/windowDimension";

const ProductIndexItem = (props) => {
  const { product } = props;
  const { width } = useWindowDimension();
  const { removeEnlargeEffect, applyEnlargeEffect } = useCSS();

  return (
    <li className={`products-hot-items`}>
      <Link
        to={`/products/${product.id}`}
        className="hot-items-image-thumnails"
      >
        <img
          className={
            width <= 480
              ? "hot-items-image-thumnail-lg"
              : "hot-items-image-thumnail"
          }
          onMouseEnter={(e) => applyEnlargeEffect(e)}
          onMouseLeave={(e) => removeEnlargeEffect(e)}
          src={product.photoUrls[0]}
        />
        <span id="thumnail-span">{product.name}</span>
      </Link>
    </li>
  );
};

export default ProductIndexItem;
