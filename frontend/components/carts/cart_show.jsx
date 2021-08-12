import React from "react";
import { Link } from "react-router-dom";

class CartShow extends React.Component{
    consrtuctor(props){
        super(props)
    }

    componentDidMount(){
        this.props.receiveCartItems();
    }

    render(){
        const { cartItems } = this.props;

        return (
            <div className="cart-show-container">
                <div>
                    <h1>{cartItems.}</h1>
                </div>

                <div>
                    <div>

                    </div>

                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CartShow;