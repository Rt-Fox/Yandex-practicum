import { combineReducers } from 'redux';
import {cartReducer} from "./cart";

export const rootReducer = combineReducers({
    cartReducer: cartReducer(state.cartReducer, action),
})

