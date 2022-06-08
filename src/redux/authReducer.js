import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR';

const initialState = {
    userLogin: null,
    userId: null,
    token: null,
    isAuth: false,
    loginError: false,
    registrationError: false
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
        case SET_REGISTRATION_ERROR:{
            return {
                ...state,
                registrationError:action.registrationError
            }
        }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserDataAC = (userLogin,userId, token, isAuth) => ({type:SET_USER_DATA, data:{userLogin, userId, token, isAuth }}) ;
export const setLoginErrorAC = loginError => ({type:SET_LOGIN_ERROR, loginError});
export const setRegistrationErrorAC = registrationError => ({type:SET_REGISTRATION_ERROR, registrationError});

export const authTC = () => { 
    return dispatch =>{
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        return authAPI.authMe(userId, token).then(response =>{
            if(response.data.status === 'OK'){
                dispatch(setAuthUserDataAC(response.data['user_login'],userId,token,true));
            }else{
                dispatch(setAuthUserDataAC(null,null,null,false));
            }
        });
    }
}

export const loginTC = (login, password) => dispatch =>{
    authAPI.login(login, password).then(response =>{
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

export const logoutTC = () => dispatch =>{
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    dispatch(setAuthUserDataAC(null,null,null,false));
}

export const registrationTC = (login, password) => dispatch => {
    authAPI.registration(login, password).then(response=>{
        if(response.data.status === 'OK'){
            localStorage.setItem('user_id', response.data['user_id']);
            localStorage.setItem('token', response.data['token']);
            dispatch(authTC());
        } else {
            dispatch(setRegistrationErrorAC(true));
        }
    });
}