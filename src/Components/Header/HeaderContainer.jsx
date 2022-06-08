import React from "react";
import { connect } from "react-redux";
import { logoutTC } from "../../redux/authReducer";
import Header from "./Header";


const mapStateToProps = state =>{
    return {
        userLogin: state.auth.userLogin,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {logout:logoutTC})(Header);