import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import {Switch, Route} from "react-router";
import { Link } from "react-router-dom";
import ProductIndexItem from "./product_index_item";
import RecentlyViewItemIndex from "./recently_view_item_index";


class ProductNavIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // question !! fetchproducts is not a function
        this.props.fetchProducts();
    }

    render (){

        const {  categoryName, couchAndSofa, outdoorFurniture, diningChairs, diningTable, coffeeTable, beds, accentChairs} = this.props;
        const categories_selector = [couchAndSofa, diningTable, coffeeTable, outdoorFurniture, beds, accentChairs, diningChairs];
        let currentCategory = categoryName.split(" ").map((word, index) => {
            return(
            index === 0 ? word.toLowerCase() : word[0].toUpperCase()+word.slice(1)
            )
        }).join("")
        let index = categories_selector.indexOf(eval(currentCategory))
        // console.log("couch",couchAndSofa)
        console.log(currentCategory)
        console.log("selector",categories_selector)
        console.log("selector[0]", categories_selector[index])

        // console.log([categories_selector.match(window["couchAndSofa"])] )

        if (categories_selector[index] === undefined){
            return null;
        }
        return(
            <div>

                <ul className="nav-static">
                    {
                    categories_selector[index].map((product) => {
                        return(
                            <ProductNavShowList
                                key={product.id} product={product}/>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}


export default ProductNavIndex;