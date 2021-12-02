const SET_NEW_INGREDIENTS = 'SET_NEW_INGREDIENTS'
const SET_INGREDIENTS = 'SET_INGREDIENTS'
const SET_INGREDIENTS_DETAIL = 'SET_INGREDIENTS_DETAIL'
const SET_INGREDIENTS_BUN = 'SET_INGREDIENTS_BUN'
const DEL_INGREDIENTS = 'DEL_INGREDIENTS'
const MOVE_INGREDIENTS = 'MOVE_INGREDIENTS'

const defaultState = {
    ingredients: [],
    sort: 0,
    ingredients_details: {},
    ingredients_bun: {}
}

export const ingredientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NEW_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, {...action.payload, id: state.sort} ],
                sort: state.sort + 1
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

        case MOVE_INGREDIENTS:
            console.log(action.payload.dragIngredients)
            state.ingredients.splice(action.payload.dragIndex, 1);
            state.ingredients.splice(action.payload.hoverIndex, 0, action.payload.dragIngredients)
            return {
                ...state
            }

        case DEL_INGREDIENTS:
            const new_arr = [...state.ingredients.slice(0, action.payload), ...state.ingredients.slice(action.payload + 1)].map((item, index)=>{
                    item.id = index
                    return item
                })
            return {
                ...state,
                ingredients: new_arr?new_arr:[],
                sort: state.sort-1
            }
        default:
            return state
    }
}

export const setNewIngredients = (payload) => { return { type: SET_NEW_INGREDIENTS, payload } }
export const setIngredients = (payload) => { return { type: SET_INGREDIENTS, payload } }
export const moveIngredients = (payload) => { return { type: MOVE_INGREDIENTS, payload } }
export const setIngredientsDetail = (payload) => { return { type: SET_INGREDIENTS_DETAIL, payload } }
export const setIngredientsBun = (payload) => { return { type: SET_INGREDIENTS_BUN, payload } }
export const deleteIngredients = (payload) => { return { type: DEL_INGREDIENTS, payload } }