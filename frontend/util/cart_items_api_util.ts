import { CartItem, CartItemId } from "../components/carts/types";
import { ProductId } from "../components/products/types";

export const $createCartItem = (productId: ProductId, quantity: number) =>
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cartItem: { productId: productId, quantity: quantity } },
  });

export const $receiveCartItems = () =>
  $.ajax({
    url: "/api/cart_items",
  });

export const $deleteCartItem = (cartItemId: CartItemId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`,
  });

export const $updateCartItem = (cartItem: CartItem) =>
  $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem },
  });
