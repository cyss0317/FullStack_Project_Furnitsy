import React from "react";

class ProductShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            errors: this.props.errors,
            mainPic: props.photoUrls[0],
            quantity: 1,
            //thinking that product hasn't been fetched yet
            index: 0,
            // index: props.photoUrls[mainPic]
        }

        this.clickPictureHandler = this.clickPictureHandler.bind(this)
        this.rightSvgClickhandler = this.rightSvgClickhandler.bind(this)
        this.leftSvgClickhandler = this.leftSvgClickhandler.bind(this)
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        
  
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

        // important!!!! need to update both states for both click events
        this.setState({ index: this.props.photoUrls.indexOf(this.state.mainPic) + 1 > this.props.photoUrls.length + 1 ? 0 : this.props.photoUrls.indexOf(this.state.mainPic) + 1})
        this.setState({ mainPic: this.props.photoUrls[this.state.index]})
        // this.setState({ mainPic: this.state.mainPic === undefined ? this.props.photoUrls[0] : this.props.photoUrls[this.props.photoUrls.indexOf(mainPic) + 1] })
       
    }

    leftSvgClickhandler(e) {
        e.preventDefault();
        this.setState({ index: this.props.photoUrls.indexOf(this.state.mainPic) - 1 < 0 ? this.props.photoUrls.length - 1: this.props.photoUrls.indexOf(this.state.mainPic) - 1 })
        this.setState({ mainPic: this.props.photoUrls[this.state.index] })
    }

    onChangeHandler(e){
        this.setState({quantity: e.currentTarget.value})
    }

    clickPictureHandler(e){
        this.setState({mainPic: e.currentTarget.alt})
        this.setState({index: this.props.photoUrls.indexOf(this.state.mainPic)})
        // tried this
        // this.setState({index: this.props.photoUrls[mainPic]})
    }

    addToCartHandler(e){
        e.preventDefault();
        // this.props.currentUser ? this.props.createCartItem(this.props.product.id, this.state.quantity) : this.props.openModal("Login")
        if( this.props.currentUser){
            this.props.createCartItem(this.props.product.id, this.state.quantity) 
        } else{
            this.setState({errors: "you need to login first"})
            this.props.openModal("Login")
        }
    }

    render (){

        //answered
        //why returning null wouldn't stop the lifecycle, 
        const { product } = this.props;
        if (product === undefined){
            return null;
        }

        if (this.state.quantity === undefined){
            this.setState({quantity: 1 })
        }
        // if (this.state.mainPic === undefined){
        //     this.setState({mainPic: product.photoUrls[0]})
        // }


        const arrHighlights = product.highlights.split("!")

        return(
            <section className="show-main-container" >
                <div className="product-show-container">
                    <div className="product-show-info">
                        <p className="show-category">{product.category} </p>
                        <br />
                        <p className="show-name">Name:  {product.name} </p>
                        <p className="show-color">Color:  {product.color} </p>
                        <div id="price-container">
                            <p className="show-price"><span></span> ${product.price}.00 </p>
                            <div>
                                <svg id="price-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>
                                <b id="price-in-stock">In stock</b>
                            </div>
                        </div>
                        <form align="center" id="show-quantity-container" onSubmit={this.addToCartHandler}>
                            {/* <div align="center" id="show-quantity-container"> */}
                                <label >Quantity</label>
                                {/* Importatn!!!! need to put defaulValue for select */}
                                <select name="quantity" id="show-quantity" defaultValue={this.state.quantity}  onChange={this.onChangeHandler}>
                                    <option value="1"  >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                </select>
                            {/* </div> */}
                            <div id="add-to-cart-container">
                                {/* <button id="add-to-cart" onClick={this.addToCartHandler}> Add to cart </button> */}
                                <input id="add-to-cart" type="submit" value="Add to cart" />
                            </div>
                        </form>
                        <div id="">
                            <div>
    
                            </div>
                            <div>
                        
                            </div>
                        </div>


                        {/* <form input="submit" id="add-to-cart">
                            <input type="submit" />
                        </form> */}

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
                                <button className="svg-button" id="left-svg-button"onClick={this.leftSvgClickhandler} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
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
                </div>

                <div id="show-page-footer">
                    <p id='footer-1st-p'>Yes!! I can do more than you see here!!</p>
                    <form action="mailto:cyss0317@gmail.com" method="POST" encType="text/plain">
                        <input className='submit_to_email' type="submit" value="Contact Yun Sung Choi" />
                    </form>
                    <p>Furnitsy is created by Yun Sung Choi 100%.</p>

                </div>

            </section>
        )
    }
}

export default ProductShow;