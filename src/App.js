import React from "react";
import { Route, Routes } from 'react-router-dom';

import Banner from "./Common/Banner/Banner";
import bannerImg from "./assets/img/banner.jpg";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Dashboard from "./Components/Dashboard/Dashboard";
import { connect } from "react-redux";
import { appInitTC } from "./redux/appReducer";
import Loader from "./Common/Loader/Loader";
import HeaderContainer from "./Components/Header/HeaderContainer";
class App extends React.Component {

  componentDidMount(){
    this.props.initApp();
  }
  render(){
    if(!this.props.initialized){
      return <Loader/>
    } else{ 
      return (
        <main>
          <HeaderContainer/>
          <Banner img = {bannerImg} title = "Spotter"/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route exact={false} path="/panel/*" element={<Dashboard/>}/>
            <Route path="/registration" element={<Registration/>}/>

          </Routes>
        </main>
      );
    }
  }
}
const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps,{initApp: appInitTC})(App);
