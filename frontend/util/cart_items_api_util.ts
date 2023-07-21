import { CartItem, CartItemId } from "../components/carts/types";
import { ProductId } from "../components/products/types";

export const $createCartItem = (productId: ProductId, quantity: number, cartId: number) =>
  $.ajax({
    method: "POST",
    url: `/api/carts/${cartId}/cart_items`,
    data: { cartItem: { productId: productId, quantity: quantity } },
  });

export const $receiveCartItems = (cartId: number) =>
  $.ajax({
    url: `/api/carts/${cartId}/cart_items`,
  });

export const $deleteCartItem = (cartItemId: CartItemId, cartId: number) =>
  $.ajax({
    method: "DELETE",
    url: `/api/carts/${cartId}/cart_items/${cartItemId}`,
  });

export const $updateCartItem = (cartItem: CartItem, cartId: number) =>
  $.ajax({
    method: "PATCH",
    url: `/api/carts/${cartId}/cart_items/${cartItem.id}`,
    data: { cartItem },
  });
