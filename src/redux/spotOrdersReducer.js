import { spotAPI } from "../api/api";

const SET_USER_ORDERS = 'SET_USER_ORDERS';
const SET_USER_ORDER_DETAILS = 'SET_USER_ORDER_DETAILS';

const initialState = {
    allOrders:[],
    currentOrderDetails:[]
}

const spotOrdersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ORDERS:{
            return {
                ...state,
                currentOrderDetails:[],
                allOrders:[...action.allOrders],
            }
        }
        case SET_USER_ORDER_DETAILS:{
            return {
                ...state,
                currentOrderDetails:[...action.currentOrderDetails]
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

// ==================
// Thunk creators
// ==================

export const getUserOrdersTC = userId => dispatch =>{
    spotAPI.getOrders(userId).then(response =>{
        console.log(response.data);

        if(response.data.status === 'OK'){
            dispatch(setUserOrdersAC(response.data.orders));
        }
    });
}
export const getUserOrderDetailsTC = (userId, $orderId) => dispatch =>{
    spotAPI.getOrderDetails(userId,$orderId).then(response =>{
        if(response.data.status === 'OK'){
            dispatch(setUserOrderDetailsAC(response.data.orders));
        }
    });
}