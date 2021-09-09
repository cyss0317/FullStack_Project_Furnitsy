import React from "react";

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
        // let keywords = keyword.split(" ")
        debugger
        // let filteredProducts = products.filter((product) => {
        //     product
        // })
        return (

            <div>
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search products</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search blog posts"
                        name="s"
                    />
                    <button type="submit">Search</button>
                </form>
                <div>
                    {/* {
                        products.map((product) => {
                            <p>{product.name}</p>
                        })
                    } */}
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