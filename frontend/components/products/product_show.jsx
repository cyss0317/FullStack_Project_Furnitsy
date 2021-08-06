import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mainPic: props.photoUrls[0]
            //thinking that product hasn't been fetched yet
        }

        this.clickPictureHandler = this.clickPictureHandler.bind(this)

    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }


    clickPictureHandler(e){
        
        this.setState({mainPic: e.currentTarget.alt})
    }

    render (){

        //answered
        //why returning null wouldn't stop the lifecycle, 
        const { product } = this.props;
        if (product === undefined){
            return null;
        }

        const arrHighlights = product.highlights.split("!")

        return(
            <section className="product-show-container" >
                <div className="product-show-info">
                    <p className="show-category">{product.category} </p>
                    <p className="show-name">Name :  {product.name} </p>
                    <p className="show-color">Color :  {product.color} </p>
                    <p className="show-price"><span></span> Price :  {product.price}.00 </p>
                    <p className="show-description"><span>Description :</span>  {product.description} </p>
                    <ul>
                        <button className="highlights-button">Highlights </button>
                        {
                            arrHighlights.map((highlight) => (
                            <li className="highlight-item">
                                &#9745;  {highlight}
                            </li>
                            ))
                        }
                    </ul>
                    <p className="show-measurement">Measurement:  {product.measurement}</p>
                </div>
                
                <div className="product-show-picture-container">
                    <div className="main-picture-container">
                        <button className="svg-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
                        </button>
                        <img className="picture-container-main"src={ this.state.mainPic === undefined ? this.props.photoUrls[0] : this.state.mainPic } alt="" />
                        <button className="svg-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg>
                        </button>
                    </div>
                    <ul className="picture-container-list">
                        {product.photoUrls.map((photo) => (
                        <li className="picture-container-list-item-container">
                            <img className="picture-container-list-item" src={photo} alt={photo} onClick={this.clickPictureHandler}  />
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