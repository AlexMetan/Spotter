import React from "react";
import { useEffect } from "react";
import SpotOrderItem from "./SpotOrdersItem/SpotOrderItem";

const SpotOrders = props =>{
    const ordersRequest = () =>{
        props.getOrders(props.userId);
    }

    useEffect(()=>{
        ordersRequest();
    },[]);

    const showOrders = () =>{
        return props.orders.map((order, index) => <SpotOrderItem key = {index} currency = {order.currency} amount = {order.amount} orderId ={order.key}/>)
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            Spot orders
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {showOrders()}
                </div>
            </div>
        </section>
    );
}

export default SpotOrders;