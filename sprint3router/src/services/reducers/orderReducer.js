import {SET_ORDER} from "../actions/orderAction";

const defaultState = {
    order: {}
}

export const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ORDER:
            return {
                ...action.payload
            }
        default:
            return state
    }
}
