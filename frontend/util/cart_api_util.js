export const $receiveCart = (userId) =>
  $.ajax({
    url: `/api/carts/${userId}`,
  });
