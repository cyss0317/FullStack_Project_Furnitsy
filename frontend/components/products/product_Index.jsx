import React from "react";
import ProductIndexItem from "./product_index_item"
import RecentlyViewItemIndex from "./recently_view_item_index";
import { withRouter } from "react-router";


class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts();
        // debugger
    }

    render(){

        const { products, couchAndSofa, randomItem10, coffeeTable,  recentlyViews, outdoor, diningTable, diningChairs, kidsBunkBed, accentChairs} = this.props;

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
                        <p>What other people are checking out <span>&amp;</span> more</p>
                        {/* <p id="show-more-from">Show more from the <span id="Ashely">Ashely</span> shop</p> */}
                    </div>
                    <ul className="recently-viewed-items">
                        {
                            //it re-renders when modal is turned on or off
                                randomItem10.map(product => (
                                    <RecentlyViewItemIndex
                                        product={product}
                                        key={product.id}
                                    />
                                ))
                        }
                    </ul>
                </div>

                {/* <div className="picks-for-you">
                        <p>Our picks for you</p>
                        <div>

                        </div>

                </div> */}
{/* 
                <div className="what_is_furnitsy">
                    <div>
                        <h1>What is Furnitsy?</h1>
                    </div>
                    <div id="what_is_furnitsy_inner">
                        <div id="furnitsy_inner_div">
                            <h2>A community doing good</h2>
                            <p>Furnitsy is a furniture store, where my mother in law buys and sells Ashely furnitures. </p>
                        </div>
                        <div id="furnitsy_inner_div">
                            <h2>Sell furnitures to customers</h2>
                            <p>We sell Ashely furnitures on our website. Whatever you can find on this website, you can also find it on actual Ashley furnitures.</p>
                        </div>
                        <div id="furnitsy_inner_div">
                            {/* ignores text align prop */}
                            {/* <h2>Peace of mind</h2>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </div> */}
                    {/* <div> */}
                    {/* <div id="contact-me">
                        <h3>If you want to hire me, contact me here!</h3>
                        {/* <button onClick="document.location= 'mailto:cyss0317@gmail.com'">Contact Yun Choi</button> */}
                        {/* <form action="mailto:cyss0317@gmail.com" method="POST" encType="text/plain">
                            <input className='submit_to_email'type="submit"  value="Contact Yun Sung Choi" />
                        </form>
                    </div> 
                </div>  */}
                

            </div>
        )
    }
}


export default withRouter(ProductIndex);