import { ProductId } from "../components/products/types";

export const $receiveProduct = (productId: ProductId) =>
  $.ajax({
    url: `/api/products/${productId}`,
  });

export const $receiveProducts = () =>
  $.ajax({
    url: "/api/products",
  });
