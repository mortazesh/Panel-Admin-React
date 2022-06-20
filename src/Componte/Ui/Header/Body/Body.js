import React from "react";

import Search from "./Search/Search";
import Notification from "./Notification/Notification";

import './Body.css'

const Body = () => {
    return(
        <section className="body-header" id="body-header"> 
            <section className="d-flex justify-content-between">
                <Search/>
                <Notification/>
            </section>
        </section>
    )
}

export default Body