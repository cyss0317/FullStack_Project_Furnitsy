import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import {Switch, Route} from "react-router";
import { Link } from "react-router-dom";


class ProductNavIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // question !! fetchproducts is not a function
        this.props.fetchProducts();
    }

    render (){

        const {  categoryName, couchAndSofa, outdoor, diningChairs, diningTable, coffeeTable, kidsBunkBed, accentChairs} = this.props;
        const categories_selector = [couchAndSofa, diningTable, coffeeTable, kidsBunkBed, accentChairs, diningChairs, outdoor];
        let currentCategory = categoryName.split(" ").map((word, index) => {
            return(
            index === 0 ? word.toLowerCase() : word[0].toUpperCase()+word.slice(1)
            )
        }).join("")
        const categories = ["Couch and Sofa",
            "Dining Table",
            "Kids Bunk Bed",
            "Accent Chairs",
            "Dining Chairs",
            "Outdoor"]
            // debugger
        if (categories_selector[currentCategory] === undefined){
            return null;
        }

        return(
            <div className="nav-static">
                <ul>
                    {
                    categories_selector[categories_selector.indexOf(currentCategory)].map((products) => {
                        return(
                            <ProductNavShowList
                                key={product.id} products={products}/>
                        )
                    })
                    }
                </ul>

            </div>
        )
    }
}


export default ProductNavIndex;