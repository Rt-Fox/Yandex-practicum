import {setOrder} from "../reducers/orderReducer";

let url = 'https://norma.nomoreparties.space/api/orders';

export const getOrder = (data) => {

    return dispatch => {
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(response.status);
        })
            .then(response => {
                dispatch(setOrder(response));

            })
            .catch(err => console.log(err));

    }
}