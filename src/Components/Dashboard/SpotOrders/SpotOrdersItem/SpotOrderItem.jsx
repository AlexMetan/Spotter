import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../SpotOrders.module.css";

const SpotOrderItem = props =>{
    debugger
    return(
        <div className="col-lg-4">
            <div className={s.OrderItem}>
                <NavLink to={'./order/' + props.orderId}/>
                <div>
                    Currency: <span className="ttu">{props.currency}</span>
                </div>
                <div>
                    Amount: {props.amount.toFixed(8)}
                </div>
            </div>
        </div>
    )
}
export default SpotOrderItem;