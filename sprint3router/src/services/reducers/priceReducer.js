import {SET_PRICE} from "../actions/priceAction";

const defaultState = {
    total_price: 0,
}

export const priceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {
                total_price: action.payload
            }
        default:
            return state
    }
}
