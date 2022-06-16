import React from "react";
import SingleOrder from "./SingleOrder";
import s from "./../SpotOrders.module.css";
import SingleOrderForm from "./SingleOrderForm/SingleOrderForm";

const SpotOrderDetails = props =>{

    const showSingleOrders = () => props.orders.map((order, index)=><SingleOrder key = {index} details = {order} />);
    
    const currency = props.orders[0] ? props.orders[0].currency : '';

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={s.SingleOrderForm}>
                            <SingleOrderForm onSubmit = {props.onSubmit}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>
                            <span className="ttu">{currency}</span> / USDT
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