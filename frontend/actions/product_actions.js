import * as ProductAPIUtil from "../util/product_api_util";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_SEARCHED_PRODUCTS = "RECEIVE_SEARCHED_PRODUCTS";

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product,
  };
};

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveSearchedProducts = (products) => ({
  type: RECEIVE_SEARCHED_PRODUCTS,
  products,
});

//thunk actions

export const ThunkReceiveProduct = (productId) => (dispatch) =>
  ProductAPIUtil.$receiveProduct(productId).then((res) =>
    dispatch(receiveProduct(res))
  );

export const ThunkReceiveProducts = () => (dispatch) =>
  ProductAPIUtil.$receiveProducts().then((res) =>
    dispatch(receiveProducts(res))
  );

export const ThunkReceiveSearchedProducts = (word) => (dispatch) =>
  ProductAPIUtil.$searchedProducts(word).then((res) =>
    dispatch(receiveSearchedProducts(res))
  );
