import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setUser} from "../../actions/userAction";

export const postLogin = (form) => {

    return dispatch => {
        fetch(`${url}/auth/login`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        }) .then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setUser(response))
                }
            })
            .catch(err => console.log(err));

    }
}