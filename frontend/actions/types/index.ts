import { Cart } from "actions/carts/types";
import { CartItem } from "actions/cart_items/types";

export class Types {
  constructor() {
    this.cart = Cart;
  }
  static Cart = () => Cart
}