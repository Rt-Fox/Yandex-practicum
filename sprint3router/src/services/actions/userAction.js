export const SET_USER = 'SET_USER'
export const CLEAN_USER = 'CLEAN_USER'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_PROFILE = 'SET_PROFILE'


export const setUser = (payload) => { return { type: SET_USER, payload } }
export const setToken = (payload) => { return { type: SET_TOKEN, payload } }
export const setProfile = (payload) => { return { type: SET_PROFILE, payload } }
export const cleanUser = () => { return { type: CLEAN_USER } }