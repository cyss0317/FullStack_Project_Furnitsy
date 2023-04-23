import React from "react";
import { Link } from "react-router-dom";
import { useCSS } from "../../CSS/hooks";
import { Product } from "./types";

interface ProductNavShowListProps {
  product: Product;
}
const ProductNavShowList = (props: ProductNavShowListProps) => {
  const { product } = props;
  const { removeEnlargeEffect, applyEnlargeEffect } = useCSS();
  return (
    <li key={product.id} id={`recently-view-item`}>
      <Link to={`/products/${product.id}`} className="recently-view-image">
        <img
          loading="lazy"
          alt={`${product.name}-image`}
          src={product.photoUrls[0]}
          onMouseEnter={(e) => applyEnlargeEffect(e)}
          onMouseLeave={(e) => removeEnlargeEffect(e)}
        />
        <span className="text-align-center margin-top-05">{`${product.name} ($${product.price}.00) `}</span>
      </Link>
    </li>
  );
};

export default ProductNavShowList;
