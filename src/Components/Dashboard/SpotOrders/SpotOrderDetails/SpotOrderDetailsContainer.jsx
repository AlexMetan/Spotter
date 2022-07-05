import React from "react";
import { connect } from "react-redux";
import { getUserOrderDetailsTC, newOrderTC, setOrderFormTypeAC } from "../../../../redux/spotOrdersReducer";
import SpotOrderDetails from "./SpotOrderDetails";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const SpotOrderDetailsContainer = props =>{
    let {id} = useParams();

    const orderRequest = () =>{
        props.getOrderDetails(props.userId, id);
    }

    useEffect(()=>{
        orderRequest();
    },[]);

    const onSubmit = form =>{
        props.newOrder(props.orders.key, props.userId, form.price, form.amount * props.orderFormType)
    }

    return(
        <SpotOrderDetails {...props}  onSubmit = {onSubmit}/>
    )
}

const mapStateToProps = state =>{
    return {
        orders: state.spot.currentOrderDetails,
        userId: state.auth.userId,
        orderFormType: state.spot.orderFormType
    };
}
export default connect(mapStateToProps,{getOrderDetails:getUserOrderDetailsTC,setOrderType:setOrderFormTypeAC,newOrder:newOrderTC})(SpotOrderDetailsContainer);