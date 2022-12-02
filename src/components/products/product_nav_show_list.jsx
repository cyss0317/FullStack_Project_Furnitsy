import React from "react";
import { Link } from "react-router-dom";
import { useCSS } from "../../CSS/hooks";

const ProductNavShowList = (props) => {
  const { product } = props;
  const { removeEnlargeEffect, applyEnlargeEffect } = useCSS();
  return (
    <li key={product.id} id={`recently-view-item`}>
      <Link to={`/products/${product.id}`} className="recently-view-image">
        <img
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
