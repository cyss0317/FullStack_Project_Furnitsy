import React from "react";
import ProductNavShowList from "./product_nav_show_list";
import {Switch, Route} from "react-router";
import { Link } from "react-router-dom";
import ProductNavCategoryIndex from "./product_nav_category_index";
import ProductShowContainer from "./product_show_container";

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
        const categories = ["Couchand Sofa",
            "Dining Table",
            "Kids Bunk Bed",
            "Accent Chairs",
            "Dining Chairs",
            "Outdoor"]
            // debugger
        return(
            <div className="nav-static">
                <div>
                    {/* <Switch> */}
                    {/* { */
                        {
                        categories_selector.map((category, index) => {
                            return(
                            // <Switch>
                            // <p>{`${category}`}</p>
                                // <Link to={`/${category}`}>{category}</Link>
                                // <p>{category}</p>
                                <div>
                                    <Link to={`/products/${categories[index]}`} />
                                    {/* //render={(props) =>  */}
  
                                    <ProductNavCategoryIndex
                                        {...props}
                                        category={category}/>
                                </div>
                                // <a href=""></a>
                                    // <ProductNavCategoryIndex products={categories_selector[index]} />
                                    //  <Route path="/products/:productId" component={ProductShowContainer}/>
                            // </S  witch>
                        //         {/* take user to show index page for category */}
                        //         {/* render other component and pass in coresponding info */}
                            )
                        })
                        }
                    {/* </Switch> */}
                </div>


                <nav className="nav-container">
                    {
                        // categories_selector.map((category, index) => {
                        //     return(
                        //         <a href={`/${JSON.stringify(category)}`}>
                        //         {category}
                        //     </a>                       
                        //     )
                        // })
                        categories.map((category, index) => {
                            return(
                            <div>
                                <a href={`/products/${category}`}>
                                    {category}
                                </a>                       
                                {/* <div>
                                    <ProductNavCategoryIndex category={categories_selector[index]}/>
                                </div> */}
                            </div>
                            )
                        })
                    }    
                
                </nav>

            </div>
        )
    }
}


export default ProductNav;