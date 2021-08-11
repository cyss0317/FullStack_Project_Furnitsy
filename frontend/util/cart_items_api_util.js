export const $createCartItem = (productId) => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: {cartItem: {productId: productId}}
    })
)

export const $receiveCartItems = () => (
    $.ajax({
        url: '/api/cart_items'
    })
)

export const $deleteCartItem = (cartItemId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${cartItemId}`,
    })
)