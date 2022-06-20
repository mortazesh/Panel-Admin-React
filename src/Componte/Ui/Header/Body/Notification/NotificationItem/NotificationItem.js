import React from "react";

import Text from "./Text/Text";
import Item from "./Item/Item";

import './NotificationItem.css'

const NotificationItem = () => {
    return (
        <section id="header-notification" className="header-notification rounded">
            <Text/>
            <Item/>
        </section>
    )
}

export default NotificationItem