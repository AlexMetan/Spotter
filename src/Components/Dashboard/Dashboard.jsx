import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import SideNav from "./SideNav/SideNav";
import { Route, Routes } from 'react-router-dom';
import SpotOrdersContainer from "./SpotOrders/SpotOrdersContainer";
import Settings from "./Settings/Settings";
import SpotOrderDetailsContainer from "./SpotOrders/SpotOrderDetails/SpotOrderDetailsContainer";

const Dashboard = props =>{

    if(!props.isAuth){
        return <Navigate to="/"/>
    }
    return(
        <div>
            <SideNav/>
            <Routes>
                <Route exact path = "/spot" element={<SpotOrdersContainer/>}/>
                <Route path = "/spot/order/:id" element={<SpotOrderDetailsContainer/>}/>
                <Route path = "/settings" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect (mapStateToProps, {})(Dashboard);