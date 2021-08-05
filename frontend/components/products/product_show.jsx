import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render (){
        const { product } = this.props;
        return(
            <section className={`${product.name}`}>
                <p>{product.category} </p>
                <h4>{product.name} </h4>
                <p>{product.color} </p>
                <p>{product.price} </p>
                <p>{product.description} </p>
            </section>
        )
    }
}

export default ProductShow;