export const SET_DATA = 'SET_DATA'
export const SET_DATA_BUN = 'SET_DATA_BUN'
export const SET_DATA_SAUCE = 'SET_DATA_SAUCE'
export const SET_DATA_MAIN = 'SET_DATA_MAIN'


export const setData = (payload) => { return { type: SET_DATA, payload } }
export const setDataBun = (payload) => { return { type: SET_DATA_BUN, payload } }
export const setDataSauce = (payload) => { return { type: SET_DATA_SAUCE, payload } }
export const setDataMain = (payload) => { return { type: SET_DATA_MAIN, payload } }