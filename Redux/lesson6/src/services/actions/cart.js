import {getItemsRequest} from "../fakeApi";

export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const CANCEL_PROMO = 'CANCEL_PROMO';

export const TAB_SWITCH = 'TAB_SWITCH';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

// Наш первый thunk
export function getItems() {
    // // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    return dispatch => {
        dispatch({type: GET_ITEMS_REQUEST})
        getItemsRequest().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ITEMS_SUCCESS,
                    items: res.data
                });
            } else {
                dispatch({
                    type: GET_ITEMS_FAILED
                });
            }
        });
    }
}
