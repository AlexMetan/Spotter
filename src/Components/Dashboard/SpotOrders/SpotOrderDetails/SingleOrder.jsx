import React from "react";
import s from "./../SpotOrders.module.css";

const SingleOrder = props => {
    
    return (
        <div className={s.SingleOrderItem}>
            <div>
                Value: {parseFloat(props.details['amount']).toFixed(8)} <span className="ttu">{props.details['currency']}</span>
            </div>
            <div>
                Buying exchange rate: {props.details['currency_price']} USDT
            </div>
            <div>
                Buying price: {props.details['amount'] * props.details['currency_price']} USDT
            </div>
        </div>
    );
}

export default SingleOrder;