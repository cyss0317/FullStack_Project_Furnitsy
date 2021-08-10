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
                {/* {product.name} */}
                {/*question! how to get rid of text decoration */}
                {/* <a href={`/products/${product.id}`}>{product.name}</a> */}
                {/* <p className="thumnail-p">{product.name}</p> */}
            <span id='thumnail-span'>
                {product.name}
            </span>
            </Link>
        </li>
    )
}


export default ProductIndexItem