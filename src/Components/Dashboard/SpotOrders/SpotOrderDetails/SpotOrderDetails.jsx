import React from "react";
import SingleOrder from "./SingleOrder";
import s from "./../SpotOrders.module.css";
import SingleOrderForm from "./SingleOrderForm/SingleOrderForm";

const SpotOrderDetails = props =>{
        const showSingleOrders = () => {
        return props.orders.items  ? props.orders.items.map((order, index)=><SingleOrder key = {index} details = {order} />) : <h4>No orders</h4>;
    }
    

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SingleOrderForm onSubmit = {props.onSubmit} orderFormType = {props.orderFormType} setOrderType = {props.setOrderType} currency = {props.orders.currency}/>
                    </div>
                    <div className="col-lg-6">
                        <h2>
                            <span className="ttu">{props.orders.currency}</span> / USDT
                        </h2>
                        {
                            showSingleOrders()
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpotOrderDetails;