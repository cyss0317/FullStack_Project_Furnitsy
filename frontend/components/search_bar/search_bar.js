import React from "react";

const SearchBar = ({placeholder, data}) => {
    // <form action="/" method="GET">

    //     <input type="text" className="header-searchbar" placeholder="Search Products" name="s"/>
    //     <button type="submit">Search</button>

    // </form>
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="serchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    )   
}

export default SearchBar;