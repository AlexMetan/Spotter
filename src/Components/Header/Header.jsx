import React from "react";
import s from './Header.module.css'; 

const Header = props => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        
                    </div>
                    <div className="col-lg-6">

                    </div>
                    <div className="col-lg-3">
                        {
                            props.isAuth ?
                            <>
                                <div className="div"></div>
                                <span> {props.userLogin} </span>
                                <span onClick={props.logout}>Logout</span>
                            </>
                            :<span>Login</span>

                        }
                        
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;