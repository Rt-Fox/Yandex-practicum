import { compose,applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import {orderReducer} from "./reducers/orderReducer";
import {datasReducer} from "./reducers/datasReducer";
import {priceReducer} from "./reducers/priceReducer";
import {ingredientsReducer} from "./reducers/ingredientsReducer";


const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
    order: orderReducer,
    data: datasReducer,
    price: priceReducer,
    ingredients: ingredientsReducer,

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))