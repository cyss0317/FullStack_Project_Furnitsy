import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product } = props; 
    return(
        <li className={`${product.id}`}>
            <Link to={`/products/${product.id}`}>{product.id}-{product.name}</Link>
        </li>
    )
}

export default ProductIndexItem;