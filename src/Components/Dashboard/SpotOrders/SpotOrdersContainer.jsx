import React from "react";
import { connect } from "react-redux";
import { getUserOrdersTC } from "../../../redux/spotOrdersReducer";
import SpotOrders from "./SpotOrders";


const mapStateToProps = state =>{
    return {
        userId: state.auth.userId,
        orders: state.spot.allOrders
    }
}

export default connect(mapStateToProps,{getOrders:getUserOrdersTC})(SpotOrders);