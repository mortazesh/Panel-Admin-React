import React from "react";

import './Text.css'

const Text = () => {
    return (
        <section className="d-flex justify-content-between">
            <span className="px-2">
                نوتیفیکیشن‌ها
            </span>
            <span className="px-2">
                <span className="badge badge-danger">
                    جدید
                </span>
            </span>
        </section>
    )
}

export default Text