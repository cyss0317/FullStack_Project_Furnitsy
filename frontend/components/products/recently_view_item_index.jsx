import React from "react";
import { Link } from "react-router-dom";



const RecentlyViewItemIndex = props => {
    const { product } = props;

    return (
        <li className={`recently-view-item`}>
            <Link to={`/products/${product.id}`} >
                <img 
                    src={product.photoUrls[0]}
                />
            </Link>
        </li>
    )
}


export default RecentlyViewItemIndex;