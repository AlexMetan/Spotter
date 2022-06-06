import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const Dashboard = props =>{
    if(!props.isAuth){
        return <Navigate to="/"/>
    }
    return(
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect (mapStateToProps, {})(Dashboard);