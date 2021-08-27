
import React from "react";
import { Link } from "react-router-dom";

const CategoryNavBar = (props, params) => {
    // const products = props.products;
    const categories = ["Couch and Sofa",
        "Dining Table",
        "Kids Bunk Bed",
        "Accent Chairs",
        "Dining Chairs",
        "Outdoor"]
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
                // <div>
                //         {
                //         categories_selector.map((category, index) => {
                //             console.log(props)
                //             console.log(params)
                //             return(
                //                 <div>
                //                     <ProductNavCategoryIndex
                //                         category={category}/>
                //                 </div>
                //             )
                //         })
                //         }

                // </div> 

        <nav className="nav-container">
            {
                // categories_selector.map((category, index) => {
                //     return(
                //         <a href={`/${JSON.stringify(category)}`}>
                //         {category}
                //     </a>                       
                //     )
                // })
                categories.map((category) => {

                    return (
                        <div>
                            <Link to={`/category/${category}`}>
                                {category}
                            </Link>
                            {/* <div>
                                    <ProductNavCategoryIndex category={categories_selector[index]}/>
                                </div> */}
                        </div>
                    )
                })
            }
        </nav>

                
    )
}



export default CategoryNavBar;
