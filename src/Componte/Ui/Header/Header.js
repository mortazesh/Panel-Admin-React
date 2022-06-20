import React from "react";

import Logo from "./Logo/Logo";
import Body from "./Body/Body";

import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <Logo/>
            <Body/>
        </div>
    )
}

export default Header