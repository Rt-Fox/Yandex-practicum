import {SET_DATA, SET_DATA_BUN, SET_DATA_MAIN, SET_DATA_SAUCE} from "../actions/datasAction";

const defaultState = {
    data: [],
    data_bun: [],
    data_sauce: [],
    data_main: [],
}

export const datasReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: [...action.payload]
            }
        case SET_DATA_BUN:
            return {
                ...state,
                data_bun: [...action.payload]
            }
        case SET_DATA_SAUCE:
            return {
                ...state,
                data_sauce: [...action.payload]
            }
        case SET_DATA_MAIN:
            return {
                ...state,
                data_main: [...action.payload]
            }
        default:
            return state
    }
}
