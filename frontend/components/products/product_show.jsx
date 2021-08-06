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
            <section className="product-show-container" >
                <p className="show-category">Category: {product.category} </p>
                <h4 className="show-name">Name:  {product.name} </h4>
                <p className="show-color">Color:  {product.color} </p>
                <p className="show-price">Price:  {product.price} </p>
                <p className="show-description">description:  {product.description} </p>
                <p className="show-measurement">measurement:  {product.measurement}</p>
                <div className="product-show-picture-container">
                    <div className="picture-container-main"></div>
                    <ul className="picture-container-list">
                        {product.photoUrls.map((photo) => (
                        <li >
                            <img src={photo} alt="" />
                        </li>
                        ))
                        }
                    </ul>
                </div>


            </section>
        )
    }
}

export default ProductShow;