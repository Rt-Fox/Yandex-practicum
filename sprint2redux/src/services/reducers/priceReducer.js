const SET_PRICE = 'SET_PRICE'

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

export const setPrice = (payload) => { return { type: SET_PRICE, payload } }