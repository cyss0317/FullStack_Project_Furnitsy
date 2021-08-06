import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product } = props; 
    
    return(
        <li className={`products`}>
            <Link to={`/products/${product.id}`}>
                <img className="product-image" 
                src="https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/main_13405-38-SET.webp" 
                />
            </Link>
        </li>
    )
}

export default ProductIndexItem