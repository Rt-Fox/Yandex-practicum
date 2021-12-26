export const SET_EMAIL = 'SET_EMAIL'
export const SET_FORM_NEW_PASSWORD = 'SET_FORM_NEW_PASSWORD'
export const SET_CHECK_EMAIL = 'SET_CHECK_EMAIL'
export const CLEAN_RESET_PASSWORD = 'CLEAN_RESET_PASSWORD'


export const setEmail = (payload) => { return { type: SET_EMAIL, payload } }
export const setFormNewPassword = (payload) => { return { type: SET_FORM_NEW_PASSWORD, payload } }
export const setCheckEmailData = (payload) => { return { type: SET_CHECK_EMAIL, payload } }
export const cleanResetPassword = () => { return { type: CLEAN_RESET_PASSWORD } }