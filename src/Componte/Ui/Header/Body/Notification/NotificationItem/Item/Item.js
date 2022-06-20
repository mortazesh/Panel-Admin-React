import React from "react";

import './Item.css'

const Item = () => {
    return (
        <ul className="list-group rounded px-0">
            <li className="list-group-item list-group-item-action">
                <section className="media">
                    <img className="notification-img" src="assets/images/avatar-2.jpg" alt="avatar" title="avatar"/>
                        <section className="media-body pr-1">
                            <h5 className="notification-user">مرتضی شهریاری</h5>
                            <p className="notification-text">درووووووووووود بر تو شهریاری!</p>
                            <p className="notification-time">1روز قبل</p>
                        </section>
                </section>
            </li>
        </ul>
    )
}

export default Item