import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import {Switch, Route} from "react-router";
import { Link } from "react-router-dom";
import ProductNavCategoryIndex from "./product_nav_category_index";

class ProductNav extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // question !! fetchproducts is not a function
        this.props.fetchProducts();
    }

    render (){

        const {  couchAndSofa, outdoor, diningChairs, diningTable, coffeeTable, kidsBunkBed, accentChairs} = this.props;
        const categories_selector = [couchAndSofa, diningTable, coffeeTable, kidsBunkBed, accentChairs, diningChairs, outdoor];
        const categories = ["Couch and Sofa",
            "Dining Table",
            "Coffee Table",
            "Kids Bunk Bed",
            "Accent Chairs",
            "Dining Chairs",
            "Outdoor"];
            // debugger
        return(
            <div className="nav-static">
                <nav className="nav-container">
                    <div>

                        {/* { */
                            categories.map((category, index) => {
                               return(
                                <Switch>
                                       <Route exact path={`/${category}`} >  <ProductNavCategoryIndex products={categories_selector[index]} /> </Route>
                                </Switch>
                            //         {/* take user to show index page for category */}
                            //         {/* render other component and pass in coresponding info */}
                            )})
                        }
                    </div>
                </nav>
            </div>
        )
    }
}


export default ProductNav;