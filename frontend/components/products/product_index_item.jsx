import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product, key } = props 
    return(
        <Link >{product.name}</Link>
    )
}

export default ProductIndexItem;