export type ProductId = number;
export interface Product {
  id: ProductId;
  name: string;
  description: Text;
  category: string;
  measurement: string;
  color: string;
  price: number;
  highlights: Text;
}

export enum ProductActionType {
  RECEIVE_PRODUCT = "RECEIVE_PRODUCT",
  RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS",
}
