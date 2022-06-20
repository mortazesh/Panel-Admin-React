import React from "react";

import './Icon.css'

const Icon = () => {
    return(
        <span id="header-notification-toggle" className="pointer">
            <i className="far fa-bell"></i><sup className="badge badge-danger">4</sup>
        </span>
    )
}

export default Icon