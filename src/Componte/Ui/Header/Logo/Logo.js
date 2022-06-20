import React from "react";

import './Logo.css'

const Logo = () => {
    return(
        <section className="sidebar-header bg-flower">
                <section className="d-flex justify-content-between flex-md-row-reverse px-3">
                    <span id="sidebar-toggle-show" className="d-inline d-md-none pointer"><i className="fas fa-toggle-off"></i></span>
                    <span id="sidebar-toggle-hide" className="d-none d-md-inline pointer"><i className="fas fa-toggle-on"></i></span>
                    <span><img className="logo" src="assets/images/logo.png" alt="FlowerShop Logo" title="FlowerShop Logo"/></span>
                    <span className="d-md-none" id="menu-toggle"><i className="fas fa-ellipsis-h"></i></span>
                </section>
        </section>
    )
}

export default Logo