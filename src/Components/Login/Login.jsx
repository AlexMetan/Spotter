import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { loginTC, setLoginErrorAC } from "../../redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";

const Login = props =>{
   
    const onSubmit = (formData) =>{
        props.setLoginError(false);
        props.login(formData.login, formData.password);
    }
    if(props.isAuth){
        return <Navigate to="/panel"/>
    }
    return (
        <section className={'container'}>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <LoginForm onSubmit = {onSubmit} loginError = {props.loginError}/>
                    {props.isAuth}
                </div>
            </div>
        </section>
    );
}
const mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuth,
        loginError : state.auth.loginError
    }
}
export default connect(mapStateToProps, {login:loginTC,setLoginError:setLoginErrorAC})(Login);