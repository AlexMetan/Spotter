import React from "react";
import DepositForm from "./DepositForm/DepositForm";

const Profile = props =>{
    return(
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2>Your balance: {parseFloat(props.balance).toFixed(2)} <span>USDT</span></h2>
                    </div>
                    <div className="col-lg-4">
                        <DepositForm onSubmit = {props.onSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;