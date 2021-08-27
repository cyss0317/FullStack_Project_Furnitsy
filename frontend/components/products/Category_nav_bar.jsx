
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

    function changeBackground(){
        
    }

    return ( 

        <nav className="nav-container">
            {
                categories.map((category) => {

                    return (
                        <div>
                            <Link id="nav-bar-tag" onClick={changeBackground}to={`/category/${category}`}>
                                {category}
                            </Link>
                        </div>
                    )
                })
            }
        </nav>

                
    )
}



export default CategoryNavBar;
