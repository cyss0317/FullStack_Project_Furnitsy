import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from "../actions/product_actions";

//nest the product in side the entitits
//takes care of the action.type, returns a corresponding value

const ProductsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_PRODUCTS:
            // need to return all the product
            // return Object.assign({}, oldState, {action.products})
            return action.products
        case RECEIVE_PRODUCT:
            return Object.assign({}, oldState, {[action.product.id]: action.product})
        default:
            return oldState;
    }
}

export default ProductsReducer;