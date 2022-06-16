import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SideNav.module.css"


const SideNav = () =>{
    return (
        <div className={s.SideNav}>
            <div className="container">
                <ul>
                    <li>
                        <NavLink to="/panel/spot">
                            Spot orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel/settings">
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;