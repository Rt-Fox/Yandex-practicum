import {setOrder} from "../actions/orderAction";
import {checkResponse} from "./checkResponse";
import {deleteAllIngredients} from "../actions/ingredientsAction";
import {url} from "../../utils/constants";


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