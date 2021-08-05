import React from "react";

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { products } = this.props.products;
        return (
            <div>
                <ul className={`${products.}`}>

                </ul>
            </div>
        )
    }
}


export default ProductIndex;