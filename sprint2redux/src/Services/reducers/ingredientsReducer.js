const SET_NEW_INGREDIENTS = 'SET_NEW_INGREDIENTS'
const SET_INGREDIENTS = 'SET_INGREDIENTS'
const SET_INGREDIENTS_DETAIL = 'SET_INGREDIENTS_DETAIL'
const SET_INGREDIENTS_BUN = 'SET_INGREDIENTS_BUN'
const DEL_INGREDIENTS = 'DEL_INGREDIENTS'

const defaultState = {
    ingredients: [],
    ingredients_details: {},
    ingredients_bun: {}
}

export const ingredientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NEW_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: [...action.payload]
            }
        case SET_INGREDIENTS_DETAIL:
            return {
                ...state,
                ingredients_details: action.payload
            }
        case SET_INGREDIENTS_BUN:
            return {
                ...state,
                ingredients_bun: action.payload
            }

        case DEL_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients.slice(0, action.payload), ...state.ingredients.slice(action.payload + 1)]

            }
        default:
            return state
    }
}

export const setNewIngredients = (payload) => { return { type: SET_NEW_INGREDIENTS, payload } }
export const setIngredients = (payload) => { return { type: SET_INGREDIENTS, payload } }
export const setIngredientsDetail = (payload) => { return { type: SET_INGREDIENTS_DETAIL, payload } }
export const setIngredientsBun = (payload) => { return { type: SET_INGREDIENTS_BUN, payload } }
export const deleteIngredients = (payload) => { return { type: DEL_INGREDIENTS, payload } }