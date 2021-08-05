import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product, keyId } = props; 
    return(
        <li className={`${keyId}`}>
            <Link >{keyId}-{product.name}</Link>
        </li>
    )
}

export default ProductIndexItem;