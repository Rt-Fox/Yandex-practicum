export const SET_FORM_LOGIN = 'SET_FORM_LOGIN'
export const SET_FORM_REGISTER = 'SET_FORM_REGISTER'
export const CLEAN_AUTHORIZATION = 'CLEAN_AUTHORIZATION'

export const setFormLogin = (payload) => { return { type: SET_FORM_LOGIN, payload } }
export const setFormRegister = (payload) => { return { type: SET_FORM_REGISTER, payload } }
export const cleanAuthorization = (payload) => { return { type: CLEAN_AUTHORIZATION, payload } }