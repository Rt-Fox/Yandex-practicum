import {
    DEL_ALL_INGREDIENTS,
    DEL_INGREDIENTS,
    MOVE_INGREDIENTS,
    SET_INGREDIENTS,
    SET_INGREDIENTS_BUN,
    SET_INGREDIENTS_DETAIL,
    SET_NEW_INGREDIENTS,
    SET_MODAL_OPEN
} from "../actions/ingredientsAction";


const defaultState = {
    modalOpen: false,
    itemId: false,
    ingredients: [],
    sort: 0,
    ingredients_details: {},
    ingredients_bun: null
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
        case SET_MODAL_OPEN:
            return {
                ...state,
                modalOpen: action.payload.flag,
                itemId: action.payload.itemId
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
        case DEL_ALL_INGREDIENTS:
            return {...defaultState}

        case MOVE_INGREDIENTS:
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
