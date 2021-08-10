export const $createCartItem = (cartItem) => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: {cartItem: cartItem}
    })
)

// export const $receiveCartItems = () => (
//     $.ajax({
//         url: '/api/cart_items',
//     })
// )

export const $deleteCartItem = (cartItemId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${cartItemId}`,
    })
)