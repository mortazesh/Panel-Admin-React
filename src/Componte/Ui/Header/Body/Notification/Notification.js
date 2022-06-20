import React from "react";

import Icon from './Icon/Icon'
import NotificationItem from "./NotificationItem/NotificationItem";

import './Notification.css'

const Notification = () => {
    return(
        <section>
            <span className="ml-2 ml-md-4 position-relative">
                <Icon/>
                <NotificationItem/>
            </span>
        </section>
    )
}

export default Notification