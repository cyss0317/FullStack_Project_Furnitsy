
import React from "react";
import { Link } from "react-router-dom";

const ProductNavCategoryIndex = props => {
    const products = props.products;

    return (
        <ul>
            { products.map((product) => 
            <li className={`products-hot-items`}>
                <Link to={`/products/${product.id}`} className="hot-items-image-thumnails">
                    <img className="hot-items-image-thumnail"
                        src={product.photoUrls[0]}
                    />
                    {/* {product.name} */}

                    <span id='thumnail-span'>
                        {product.name}
                    </span>
                </Link>
            </li>
            )
            }
        </ul>
    )
}



export default ProductNavCategoryIndex;
