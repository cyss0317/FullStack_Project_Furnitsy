import { Product } from "./types";
import * as ProductAPIUtil from "../../util/product_api_util";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProduct = (product: Product) => {
  return {
    type: RECEIVE_PRODUCT,
    product,
  };
};

export const receiveProducts = (products: Array<Product>) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

//thunk actions

export const ThunkReceiveProduct = (productId: number) => (dispatch) =>
  ProductAPIUtil.$receiveProduct(productId).then((res: Product) =>
    dispatch(receiveProduct(res))
  );

export const ThunkReceiveProducts = () => (dispatch) =>
  ProductAPIUtil.$receiveProducts().then((res: Array<Product>) =>
    dispatch(receiveProducts(res))
  );
