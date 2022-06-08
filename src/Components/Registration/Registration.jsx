import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { registrationTC, setRegistrationErrorAC } from "../../redux/authReducer";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Registration = props =>{
   
    const onSubmit = (formData) =>{
        props.setRegistrationError(false);
        props.registration(formData.login, formData.password);
    }
    if(props.isAuth){
        return <Navigate to="/panel"/>
    }
    return (
        <section className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6">
                    <RegistrationForm onSubmit = {onSubmit} registrationError = {props.registrationError}/>
                    {props.isAuth}
                </div>
            </div>
        </section>
    );
}
const mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuth,
        registrationError : state.auth.registrationError
    }
}
export default connect(mapStateToProps, {registration:registrationTC,setRegistrationError:setRegistrationErrorAC})(Registration);