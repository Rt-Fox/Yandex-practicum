const SET_ORDER = 'SET_ORDER'

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

export const setOrder = (payload) => { return { type: SET_ORDER, payload } }
