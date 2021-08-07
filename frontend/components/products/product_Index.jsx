import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const { products, couchAndSofa } = this.props;
        const categories = ["Couch and Sofa",
            "Console Table",
            "Outdoor Dining Sets",
            "Dining Table",
            "Coffee Table",
            "Kids Bunk Bed",
            "Accent Chairs",
            "Dining Chairs",
            "Outdoor"]

        return (
            <div className="index-main-container">
                <nav className="nav-container">
                    {
                        categories.map((category) => (
                            <a className="nav-item">
                                {category}
                            </a>
                        ))
                    }
                </nav>
                <div className="products-index-container" >
                    <h2 className="index-container-logo">Furnitures made just for you.</h2>
                    <p className="best-selling-items">Best selling items</p>
                    <ul className="products-index-container-ul">
                            {
                            couchAndSofa.map(product => (       
                                <ProductIndexItem
                                    product={product}
                                    key={product.id}
                                />
                            )
                            )}
                    </ul>
                </div>
                

            </div>
        )
    }
}


export default ProductIndex;