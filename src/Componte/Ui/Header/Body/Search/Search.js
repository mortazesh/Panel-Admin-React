import React from "react";

import './Search.css'

const Search = () => {
    return (
        <section>
            <span className="mr-5">
                <span id="search-area" className="search-area d-none">
                    <i id="search-area-hide" className="fas fa-times pointer"></i>
                    <input type="text" className="search-input" name="" id="search-input"/>
                        <i className="fas fa-search pointer"></i>
                </span>
                <i id="search-toggle" className="fas fa-search d-none d-md-inline pointer"></i>
            </span>

            <span id="full-screen" className="pointer d-none d-md-inline mr-5">
                <i id="screen-compress" className="fas fa-compress d-none"></i>
                <i id="screen-expand" className="fas fa-expand"></i>
            </span>
        </section>
    )
}

export default Search