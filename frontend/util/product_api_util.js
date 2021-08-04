export const receiveProduct = product => (

    $.ajax({
        url: `/api/products/${product.id}`,
        
    })
)

export const receiverProducts = () => (

    $.ajax({
        url: "/api/products"
        
    })
)