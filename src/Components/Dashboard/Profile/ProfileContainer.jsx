import { changeUserBalanceTC, getUserBalanceTC } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";


const ProfileContainer = props => {
    useEffect(()=>{
        props.getBalance(props.userId, props.token);
    },[]);

    const onSubmit = form =>{
        props.changeBalance(props.userId, props.token, '1', form.amount, true);
    }
    
    return (<Profile {...props} onSubmit = {onSubmit} />);
}


const mapStateToProps = state =>{
    return{
        userId: state.auth.userId,
        token: state.auth.token,
        balance: state.profile.balance
    }
}

export default connect(mapStateToProps,{getBalance:getUserBalanceTC, changeBalance:changeUserBalanceTC})(ProfileContainer); 