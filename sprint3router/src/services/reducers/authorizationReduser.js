import {SET_FORM_LOGIN,SET_FORM_REGISTER,CLEAN_AUTHORIZATION} from "../actions/authorizationActions";

const defaultState = {
    formLogin: {
        email: "",
        password: "",
    },
    formRegister:   {
        email: "",
        password: "",
        name: ""
    }
}

export const authorizationReduser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FORM_LOGIN:
            return {
                ...state,
                formLogin: action.payload
            }
        case SET_FORM_REGISTER:
            return {
                ...state,
                formRegister: action.payload
            }
        case CLEAN_AUTHORIZATION:
            return {
                ...defaultState
            }
        default:
            return state
    }
}