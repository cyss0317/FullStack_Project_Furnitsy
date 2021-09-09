import React from "react";
import ProductNavShowList from "../products/product_nav_show_list";

class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // debugger
        this.props.receiveProducts()
    }
// class SearchBar = ({placeholder, data}) => {
    // <form action="/" method="GET">

    //     <input type="text" className="header-searchbar" placeholder="Search Products" name="s"/>
    //     <button type="submit">Search</button>

    // </form>
    render(){
        const {products, keyword} = this.props;
        // const keyword = new URLSearchParams(window.location).get("s")
        if (products === undefined) return null;
        let keywords = keyword.split(" ")
        let filteredProducts = products.filter((product) => {
            // keywords.forEach((word) => {
                return product.name.toLowerCase().includes(keyword.toLowerCase())
        //     })
        })
        debugger

        return (

            <div>
              
                <div>
                    {
                        filteredProducts.map((product) => {
                           return(
                               <ProductNavShowList product={product} />

                           )
                        })
                    }

                    hellooooooo
                </div>

            </div>
            // <form action="/" method="get" className="search">
            //     <div className="searchInputs">
            //         <input type="text" placeholder={placeholder}/>
            //         <div className="serchIcon"></div>
            //     </div>
            //     <div className="dataResult"></div>
            // </form>


            // <form action="/" method="get">
            //     <label htmlFor="header-search">
            //         <span className="visually-hidden">Search products</span>
            //     </label>
            //     <input
            //         type="text"
            //         id="header-search"
            //         placeholder="Search blog posts"
            //         name="s"
            //     />
            //     <button type="submit">Search</button>
            // </form>
        )   
    }
}
export default SearchBar;