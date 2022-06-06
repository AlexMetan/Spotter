import React from "react";
import s from './Banner.module.css';
const Banner = (props) =>{
    return (
        <section style={{backgroundImage: `url(${props.img})`}} className = {s.banner}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>
                            {props.title}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;