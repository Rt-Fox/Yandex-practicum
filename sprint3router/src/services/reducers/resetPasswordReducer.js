import {SET_EMAIL,SET_CHECK_EMAIL,CLEAN_RESET_PASSWORD,SET_FORM_NEW_PASSWORD} from "../actions/resetPasswordAction";

const defaultState = {
    form: {
        email: ''
    },
    checkEmailData: {
        success: false,
        message: "Reset email sent"
    },
    formNewPassword:   {
        password: "",
        token: ""
    }
}

export const resetPasswordReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                form: {...state.form, email: action.payload}
            }
        case SET_FORM_NEW_PASSWORD:
            return {
                ...state,
                formNewPassword: action.payload
            }
        case SET_CHECK_EMAIL:
            return {
                ...state,
                checkEmailData: {...action.payload}
            }
        case CLEAN_RESET_PASSWORD:
            return {
                ...defaultState
            }
        default:
            return state
    }
}
