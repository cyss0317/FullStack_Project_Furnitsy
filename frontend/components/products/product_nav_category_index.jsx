
import React from "react";
import { Link } from "react-router-dom";

const ProductNavCategoryIndex = (props, params) => {
    // const products = props.products;
    console.log(props)
    console.log(params)
    const category = props.category;
    return (
        // <ul>
        //     { category.map((product) => 
        //     <li className={`products-hot-items`}>
        //         <Link to={`/products/${product.id}`} className="hot-items-image-thumnails">
        //             <img className="hot-items-image-thumnail"
        //                 src={product.photoUrls[0]}
        //             />
        //             {/* {product.name} */}

        //             <span id='thumnail-span'>
        //                 {product.name}
        //             </span>
        //         </Link>
        //     </li>
        //     )
        //     }
        // </ul>
                <div>
                        {
                        categories_selector.map((category, index) => {
                            console.log(props)
                            console.log(params)
                            return(
                                <div>
                                    <ProductNavCategoryIndex
                                        category={category}/>
                                </div>
                            )
                        })
                        }

                </div> 
    )
}



export default ProductNavCategoryIndex;
