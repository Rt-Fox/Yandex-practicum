import {setOrder} from "../actions/orderAction";
import {url} from "../utils/consts";
import {checkResponse} from "./checkResponse";
import {deleteAllIngredients} from "../actions/ingredientsAction";


export const getOrder = (data) => {

    return dispatch => {
        fetch(`${url}/orders`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }) .then(checkResponse)
            .then(response => {
                dispatch(setOrder(response));
                dispatch(deleteAllIngredients())
            })
            .catch(err => console.log(err));

    }
}