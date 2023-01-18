export const $receiveCart = (userId: string) =>
  $.ajax({
    url: `/api/carts/${userId}`,
  });
