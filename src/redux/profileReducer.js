import { userAPI } from "../api/api";

const SET_USER_BALANCE = "GET_USER_BALANCE";

const initialState = {
    balance: 0
};

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_USER_BALANCE:{
            return {
                ...state,
                balance: action.balance
            }
        }
        default:
            return state;
    }
}

// ==================
// Action creators
// ==================

export const setUserBalanceAC = balance => ({type:SET_USER_BALANCE, balance})

// ==================
// Thunk creators
// ==================

export const getUserBalanceTC = (userId, token) => dispatch =>{
    userAPI.getBalance(userId, token).then(response =>{
        if(response.data.status === 'OK'){
            dispatch(setUserBalanceAC(response.data.balance));
        }
    })
}

export const changeUserBalanceTC = (userId, token, amount, type, isDeposit = false) => dispatch =>{
    userAPI.changeBalance(userId, token, amount, type, isDeposit).then(response =>{
        if(response.data.status === 'OK'){
            dispatch(getUserBalanceTC(userId, token));
        }
    })
}


export default profileReducer;