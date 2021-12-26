import {SET_USER, CLEAN_USER,SET_TOKEN,SET_PROFILE} from "../actions/userAction";

const defaultState = {
    success: false,
    user: {
        email: "",
        name: ""
    },
    accessToken: "",
    refreshToken: ""

}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            localStorage.setItem('token', JSON.stringify({accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken }));
            return {
                ...action.payload
            }
        case SET_PROFILE:
            return {
                ...state,
                user: {email: action.payload.email, name: action.payload.name}
            }
        case SET_TOKEN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            }
        case CLEAN_USER:
            localStorage.removeItem('token')
            return {
                defaultState
            }
        default:
            return state
    }
}
