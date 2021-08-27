import React from "react";


const ProductNavShowList = (props) => {
    const {products} = props;
    debugger
    return(
        <li> 
            {
            products.map((product) => (
                <div>
                    {product.photoUrls[0]}
                    {product.name}
                </div>    
            ))
            }
        </li> 

    )

}


export default ProductNavShowList;