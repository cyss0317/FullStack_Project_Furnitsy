import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render (){
        //question!! 
        //why returning null wouldn't stop the lifecycle, 
        const { product } = this.props;
        if (product === undefined){
            return null;
        }
        return(
            <section >
                <p>Category: {product.category} </p>
                <h4>Name:  {product.name} </h4>
                <p>Color:  {product.color} </p>
                <p>Price:  {product.price} </p>
                <p>description:  {product.description} </p>
                <p>measurement:  {product.measurement}</p>
            </section>
        )
    }
}

export default ProductShow;