export const $createCartItem = (productId, quantity) => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: {cartItem: {productId: productId, quantity: quantity}}
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

export const $updateCartItem = (cartItem) => (
    $.ajax({
        method: "PATCH",
        url: `/api/cart_items/${cartItemId}`,
        data: {cartItem}
    })
)