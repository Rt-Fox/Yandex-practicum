export const SET_NEW_INGREDIENTS = 'SET_NEW_INGREDIENTS'
export const SET_INGREDIENTS = 'SET_INGREDIENTS'
export const SET_INGREDIENTS_DETAIL = 'SET_INGREDIENTS_DETAIL'
export const SET_INGREDIENTS_BUN = 'SET_INGREDIENTS_BUN'
export const DEL_INGREDIENTS = 'DEL_INGREDIENTS'
export const DEL_ALL_INGREDIENTS = 'DEL_ALL_INGREDIENTS'
export const MOVE_INGREDIENTS = 'MOVE_INGREDIENTS'
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN'



export const setNewIngredients = (payload) => { return { type: SET_NEW_INGREDIENTS, payload } }
export const setIngredients = (payload) => { return { type: SET_INGREDIENTS, payload } }
export const setModalOpen = (payload) => { return { type: SET_MODAL_OPEN, payload } }
export const moveIngredients = (payload) => { return { type: MOVE_INGREDIENTS, payload } }
export const setIngredientsDetail = (payload) => { return { type: SET_INGREDIENTS_DETAIL, payload } }
export const setIngredientsBun = (payload) => { return { type: SET_INGREDIENTS_BUN, payload } }
export const deleteIngredients = (payload) => { return { type: DEL_INGREDIENTS, payload } }
export const deleteAllIngredients = () => { return { type: DEL_ALL_INGREDIENTS } }