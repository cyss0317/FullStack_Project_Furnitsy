import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mainPic: props.photoUrls[0],
            //thinking that product hasn't been fetched yet
            // index: 0,
            // index: props.photoUrls[mainPic]
        }

        this.clickPictureHandler = this.clickPictureHandler.bind(this)
        this.rightSvgClickhandler = this.rightSvgClickhandler.bind(this)

    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    rightSvgClickhandler(e){
        e.preventDefault();
        // this.setState({mainPic: this.props.photoUrls[3] })
        // if (this.state.mainPic === undefined) {
        //     this.setState({mainPic: this.props.photoUrls[0]})
        // }
        this.setState({ mainPic: this.props.photoUrls[this.state.index + 1] })
        // this.setState({ mainPic: this.state.mainPic === undefined ? this.props.photoUrls[0] : this.props.photoUrls[this.props.photoUrls.indexOf(mainPic) + 1] })
       
    }

    // leftSvgClickhandler(e) {

    // }

    clickPictureHandler(e){
        this.setState({mainPic: e.currentTarget.alt})
        // tried this
        // this.setState({index: this.props.photoUrls[mainPic]})

    }

    render (){

        //answered
        //why returning null wouldn't stop the lifecycle, 
        const { product } = this.props;
        if (product === undefined){
            return null;
        }

        // if (this.state.mainPic === undefined){
        //     this.setState({mainPic: product.photoUrls[0]})
        // }


        const arrHighlights = product.highlights.split("!")

        return(
            <section className="product-show-container" >
                <div className="product-show-info">
                    <p className="show-category">Category:  {product.category} </p>
                    <p className="show-name">Name :  {product.name} </p>
                    <p className="show-color">Color :  {product.color} </p>
                    <p className="show-price"><span></span> Price :  {product.price}.00 </p>
                    <p className="show-description"><button className="buttons">Description :</button>  {product.description} </p>
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
                
                <div className="product-show-picture-container-outter">
                    <div className="product-show-picture-container-inner" >
                        <div className="main-picture-container">
                            <button className="svg-button" id="left-svg-button" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
                            </button>
                            <img className="picture-container-main"src={ this.state.mainPic === undefined ? this.props.photoUrls[0] : this.state.mainPic } alt="" />
                            <button className="svg-button" id="right-svg-button" onClick={this.rightSvgClickhandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg>
                            </button>
                        </div>
                        <ul className="picture-container-list">
                            {product.photoUrls.map((photo) => (
                            <li className="picture-container-list-item-container">
                                {/* important! */}
                                <img className="picture-container-list-item" src={photo} alt={photo} onClick={this.clickPictureHandler}  />
                            </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}

export default ProductShow;