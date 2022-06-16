import { applyMiddleware,combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import spotOrdersReducer from './spotOrdersReducer';

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    spot: spotOrdersReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
window.store = store;