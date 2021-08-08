import React from "react";

const ProductNavShowList = (props) => {
    const {products} = props;
    debugger
    return(
        <div>
            <ul>
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
            </ul>
        </div>
    )

}


export default ProductNavShowList;