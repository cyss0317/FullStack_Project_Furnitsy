export const $createCartItem = (userId, productId)(
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: {userId, productId}
    })
)

export const $receiveCartItems = (userId)(
    $.ajax({
        url: '/api/cart_items',
        data: {userId}
    })
)

export const $deleteCartItem = (userId, productId)(
    $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${userId}`
    })
)