export const $receiveProduct = (productId) =>
  $.ajax({
    url: `/api/products/${productId}`,
  });

export const $receiveProducts = () =>
  $.ajax({
    url: "/api/products",
  });

export const $searchedProducts = (word) => {
  $.ajax({
    url: `/search/${word}`,
  });
};
