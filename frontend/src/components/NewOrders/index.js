import React from 'react';
import Orders from '../Orders';

export default function NewOrders() {
    return (
        <Orders status="active" event=".order.made" />
    )
}
