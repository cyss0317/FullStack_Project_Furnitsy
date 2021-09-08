import React from "react";

const SearchBar = ({placeholder, data}) => {
    // <form action="/" method="GET">

    //     <input type="text" className="header-searchbar" placeholder="Search Products" name="s"/>
    //     <button type="submit">Search</button>

    // </form>
    return (
        // <form action="/" method="get" className="search">
        //     <div className="searchInputs">
        //         <input type="text" placeholder={placeholder}/>
        //         <div className="serchIcon"></div>
        //     </div>
        //     <div className="dataResult"></div>
        // </form>
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
    )   
}

export default SearchBar;