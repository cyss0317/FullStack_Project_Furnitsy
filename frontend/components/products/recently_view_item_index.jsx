import React from "react";
import { Link } from "react-router-dom";



const RecentlyViewItemIndex = props => {
    const { product } = props;

    return (
        <li className={`products-hot-items`}>
            <Link to={`/products/${product.id}`} className="hot-items-image-thumnails">
                <img className="hot-items-image-thumnail"
                    src={product.photoUrls[0]}
                />
            </Link>
        </li>
    )
}


export default RecentlyViewItemIndex;