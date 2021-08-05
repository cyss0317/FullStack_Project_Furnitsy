import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product } = props; 
    return(
        <li className={`products`}>
            <img className="product-image" src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/main_13405-38-SET.webp" alt="" />
            <Link to={`/products/${product.id}`}>{product.id}-{product.name}</Link>
        </li>
    )
}

export default ProductIndexItem;