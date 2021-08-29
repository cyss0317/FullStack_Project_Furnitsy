import React from "react";
import { Link } from "react-router-dom";


const ProductNavShowList = (props) => {
    const {product} = props;

   
    return(
                <li id={`recently-view-item`}>
                    {/* <span>
                    <a href={`#/products/${product.id}`} >
                        {`${product.price}.00( 0% off)`}
                    </a>
                </span> */}
                    <Link to={`/products/${product.id}`} className="recently-view-image">
                        <img
                            src={product.photoUrls[0]}
                        />

                        <span>{product.name}</span>
                        <span>{`$${product.price}.00( 0% off)`}</span>
                    </Link>
                </li>
    )

}


export default ProductNavShowList;