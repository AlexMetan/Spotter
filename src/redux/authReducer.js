import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const initialState = {
    userId: null,
    token: null,
    isAuth: false,
    loginError: false
};

const authReducer = (state=initialState, action) =>{
    switch (action.type){
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data
            }
        }
        case SET_LOGIN_ERROR:{
            return {
                ...state,
                loginError:action.loginError
            }
        }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserDataAC = (userId, token, isAuth) => ({type:SET_USER_DATA, data:{ userId, token, isAuth }}) ;
export const setLoginErrorAC = loginError => ({type:SET_LOGIN_ERROR, loginError});
export const authTC = () => { 
    return dispatch =>{
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        return authAPI.authMe(userId, token).then(response =>{
            if(response.data.status === 'OK'){
                dispatch(setAuthUserDataAC(userId,token,true));
            }else{
                dispatch(setAuthUserDataAC(null,null,false));
            }
        });
    }
}

export const loginTC = (email, password) => dispatch =>{
    authAPI.login(email, password).then(response =>{
        dispatch(setLoginErrorAC(true));
        if(response.data.status === 'OK'){
            localStorage.setItem('user_id', response.data['user_id']);
            localStorage.setItem('token', response.data['token']);
            dispatch(authTC(response.data['user_id'], response.data['token']));
            dispatch(setLoginErrorAC(false));
            
        }else{
            dispatch(setLoginErrorAC(true));
        }
    })
}