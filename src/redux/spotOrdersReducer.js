import { spotAPI } from "../api/api";
import { changeUserBalanceTC } from "./profileReducer";

const SET_USER_ORDERS = 'SET_USER_ORDERS';
const SET_USER_ORDER_DETAILS = 'SET_USER_ORDER_DETAILS';
const SET_ORDER_FORM_TYPE = 'SET_ORDER_FORM_TYPE';

// orderFormType "-1" - sell, 1 - buy

const initialState = {
    allOrders:[],
    currentOrderDetails:{
        currency: '',
        key: '',
        items:[]
    },
    orderFormType: 1
}

const spotOrdersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ORDERS:{
            return {
                ...state,
                currentOrderDetails:{
                    currency: '',
                    items:[]
                },
                allOrders:[...action.allOrders],
            }
        }
        case SET_USER_ORDER_DETAILS:{
            return {
                ...state,
                currentOrderDetails:{...action.currentOrderDetails}
            }
        }
        case SET_ORDER_FORM_TYPE:{
            return{
                ...state,
                orderFormType:action.orderFormType
            }
        }
        default:
            return state;
    }
}

export default spotOrdersReducer;

// ==================
// Action creators
// ==================

export const setUserOrdersAC = allOrders =>({type:SET_USER_ORDERS, allOrders});

export const setUserOrderDetailsAC = currentOrderDetails =>({type:SET_USER_ORDER_DETAILS, currentOrderDetails});

export const setOrderFormTypeAC = orderFormType => ({type:SET_ORDER_FORM_TYPE, orderFormType});

// ==================
// Thunk creators
// ==================

export const getUserOrdersTC = userId => dispatch =>{
    spotAPI.getOrders(userId).then(response =>{
        if(response.data.status === 'OK'){
            dispatch(setUserOrdersAC(response.data.orders));
        }
    });
}
export const getUserOrderDetailsTC = (userId, orderId) => dispatch =>{
    spotAPI.getOrderDetails(userId, orderId).then(response =>{
        if(response.data.status === 'OK'){
            const order = {
                currency: response.data.currency,
                key: response.data.key,
                items: response.data.orders
            }
            dispatch(setUserOrderDetailsAC(order));
        }
    });
}

export const newOrderTC = (key, userId, price, amount) => dispatch => {
    spotAPI.newOrder(key, userId, price, amount).then(response =>{
        if(response.data.status === 'OK'){
            // dispatch(changeUserBalanceTC(userId, token, amount, type,))
        }
    });
}