import {CLEAN_PERSONAL_INFORMATION,SET_PERSONAL_INFORMATION,CLEAN_PERSONAL_INFORMATION_STATE} from "../actions/personalInformationAction";

const defaultState = {
    email: '',
    name: '',
    password: '',
}

export const personalInfoRedux = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PERSONAL_INFORMATION:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case CLEAN_PERSONAL_INFORMATION:
            return {
                ...state,
                [action.payload.name]: ''
            }
        case CLEAN_PERSONAL_INFORMATION_STATE:
            return {
                ...defaultState
            }
        default:
            return state
    }
}