import { authTC } from "./authReducer";

const INIT_SUCCESS = "INIT_SUCCESS";

const initialState = {
    initialized: false,
};
const appReducer = (state = initialState, action)=>{
    switch (action.type){
        case INIT_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
}

// ==================
// Action creators
// ==================

export const initSuccessAC = () =>({type:INIT_SUCCESS});

// ==================
// Thunk creators
// ==================

export const appInitTC = () => dispatch =>{    
    let promise = dispatch(authTC());
    
    promise.then(()=>{
        dispatch(initSuccessAC());
    });
}
export default appReducer;