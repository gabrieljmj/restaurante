import React from 'react';
import Orders from '../Orders';

export default function ReadyOrders() {
    return (
        <Orders status="ready" event=".order.ready" />
    )
}
