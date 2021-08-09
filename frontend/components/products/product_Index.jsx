import React from "react";
import ProductIndexItem from "./product_index_item"
import RecentlyViewItemIndex from "./recently_view_item_index";


class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const { products, couchAndSofa, randomItem, coffeeTable,  recentlyViews, outdoor, diningTable, diningChairs, kidsBunkBed, accentChairs} = this.props;
        
        // const randomItem = [];

        // {

            // for (let i = 0; i < 6; i++) {
            //     return randomItem.push(products[Math.floor(Math.random() * products.length)]);
            // }
        // }
        // if (randomItem === undefined){
        //     return null;
        // }


        // debugger
        return (
            <div className="index-main-container">

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
                <div className='recently-viewed-container'>
                    <div id="recently-words">
                        <p>Recently viewed <span>&amp;</span> more</p>
                        {/* <p id="show-more-from">Show more from the <span id="Ashely">Ashely</span> shop</p> */}
                    </div>
                    <ul className="recently-viewed-items">
                        {
                                couchAndSofa.map(product => (
                                    <RecentlyViewItemIndex
                                        product={product}
                                        key={product.id}
                                    />
                                ))
                        }
                    </ul>
                </div>

                <div className="picks-for-you">
                        <p>Our picks for you</p>
                        <div>
                            {/*  */}
                        </div>

                </div>

                <div className="what_is_furnitsy">
            
                        <h1>What is Furnitsy?</h1>

                    <div>
                        <h2>A community doing good</h2>
                        <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
                    </div>
                    <div>
                        <h2></h2>
                    </div>

                </div>
                

            </div>
        )
    }
}


export default ProductIndex;