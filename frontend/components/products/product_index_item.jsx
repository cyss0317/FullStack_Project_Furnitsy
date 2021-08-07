import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = props => {
    const { product } = props; 
    
    return(
        <li className={`products-hot-items`}>
            <Link to={`/products/${product.id}`} className="hot-items-image-thumnails">
                <img className="hot-items-image-thumnail" 
                src={product.photoUrls[0]}
                />
                {/* how to get rid of text decoration */}
                <span>{product.name}</span>
                {/* <p className="thumnail-p">{product.name}</p> */}
            </Link>
        </li>
    )
}
<img src="" alt="" > </img>

export default ProductIndexItem