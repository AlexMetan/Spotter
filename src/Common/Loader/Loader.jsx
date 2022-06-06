import React from "react";
import s from './Loader.module.css';
import loaderImg from './../../assets/img/loader.png';

const Loader = props =>{
    return (
        <div className={s.mainLoader}>
            <img src={loaderImg}/>
        </div>
    );
}
export default Loader; 