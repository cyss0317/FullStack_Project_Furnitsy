import React from "react";
import { Link } from "react-router-dom";
import { useCSS } from "../../CSS/hooks";
import { Product } from "./types";

interface RecentlyViewItemIndexProps {
  product: Product;
}

const RecentlyViewItemIndex = (props: RecentlyViewItemIndexProps) => {
  const { product } = props;
  const { removeEnlargeEffect, applyEnlargeEffect } = useCSS();

  return (
    <li className={`recently-view-item`}>
      <Link to={`/products/${product.id}`} className="recently-view-image">
        <img
          alt={`${product.name}-image`}
          src={product.photoUrls[0]}
          onMouseEnter={(e) => applyEnlargeEffect(e)}
          onMouseLeave={(e) => removeEnlargeEffect(e)}
        />
        <span>{`${product.price}.00( 0% off)`}</span>
      </Link>
    </li>
  );
};

export default RecentlyViewItemIndex;
