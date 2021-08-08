import React from "react";
import ProductNavShowList from "./product_nav_show_list";

class ProductNav extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchProducts();
    }

    render (){
        debugger
        const { products, couchAndSofa, outdoor, diningChairs, diningTable, coffeeTable, kidsBunkBed, accentChairs} = this.props;
        const categories_selector = [couchAndSofa, diningTable, coffeeTable, kidsBunkBed, accentChairs, diningChairs, outdoor];
        const categories = ["Couch and Sofa",
            "Dining Table",
            "Coffee Table",
            "Kids Bunk Bed",
            "Accent Chairs",
            "Dining Chairs",
            "Outdoor"];
        return(
            <div className="nav-static">
                <nav className="nav-container">
                    {
                        categories.map((category, index) => (
                            <a className="nav-item">
                                {/* take user to show index page for category */}
                                {/* render other component and pass in coresponding info */}
                                <ProductNavShowList products={categories_selector[index]} />
                                {category}
                            </a>
                        ))
 

                    }
                </nav>
            </div>
        )
    }
}


export default ProductNav;