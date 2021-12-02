const SET_DATA = 'SET_DATA'
const SET_DATA_BUN = 'SET_DATA_BUN'
const SET_DATA_SAUCE = 'SET_DATA_SAUCE'
const SET_DATA_MAIN = 'SET_DATA_MAIN'

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

export const setData = (payload) => { return { type: SET_DATA, payload } }
export const setDataBun = (payload) => { return { type: SET_DATA_BUN, payload } }
export const setDataSauce = (payload) => { return { type: SET_DATA_SAUCE, payload } }
export const setDataMain = (payload) => { return { type: SET_DATA_MAIN, payload } }