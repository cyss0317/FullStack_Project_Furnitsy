import React from "react";
import { Link } from "react-router-dom";
import { useCSS } from "../../CSS/hooks";
import { useWindowDimension } from "../../util/windowDimension";
import { Product } from "./types";

interface ProductIndexItemProps {
  product: Product;
}

const ProductIndexItem = (props: ProductIndexItemProps) => {
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
          alt={`${product.name}-image`}
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
