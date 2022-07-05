import React from "react";
import s from './Header.module.css'; 
import LogoImg from "./../../assets/img/logo.svg";
import LogoutIcon from "./../../assets/icons/logout.png";
import UserIcon from "./../../assets/icons/user.png";


const Header = props => {
    return (
        <header className={s.mainHeader}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className={s.mainLogo}>
                            <img src={LogoImg} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-6">

                    </div>
                    <div className="col-lg-3">
                        <div className={s.flexAlign}>
                            <div className={s.content}>
                            {
                                props.isAuth ?
                                <>
                                    <span className={s.user}><img src={UserIcon} alt="logout" />{props.userLogin}</span>
                                    <span className={s.logout} onClick={props.logout}><img src={LogoutIcon} alt="logout" /></span>
                                </>
                                : null
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;