export const CLEAN_PERSONAL_INFORMATION = 'CLEAN_PERSONAL_INFORMATION'
export const SET_PERSONAL_INFORMATION = 'CLEAN_PERSONAL_INFORMATION'
export const CLEAN_PERSONAL_INFORMATION_STATE = 'CLEAN_PERSONAL_INFORMATION_STATE'


export const setPersonalInformation = (payload) => { return { type: SET_PERSONAL_INFORMATION, payload } }
export const cleanPersonalInformation = (payload) => { return { type: CLEAN_PERSONAL_INFORMATION, payload } }
export const cleanPersonalInformationState = () => { return { type: CLEAN_PERSONAL_INFORMATION_STATE } }