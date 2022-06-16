import React from "react";
import s from "./../SpotOrders.module.css";

const SingleOrder = props => {
    debugger
    
    return (
        <div className={s.SingleOrderItem}>
            <div>
                Value: {parseFloat(props.details['value']).toFixed(8)} <span className="ttu">{props.details['currency']}</span>
            </div>
            <div>
                Buying exchange rate: {props.details['buy_price']} USDT
            </div>
            <div>
                Buying price: {props.details['value'] * props.details['buy_price']} USDT
            </div>
        </div>
    );
}

export default SingleOrder;