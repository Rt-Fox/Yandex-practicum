import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setCheckEmailData} from "../../actions/resetPasswordAction";

export const checkEmail = (form) => {

    return dispatch => {
        fetch(`${url}/password-reset`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        }) .then(checkResponse)
            .then(response => {
                dispatch(setCheckEmailData(response));
            })
            .catch(err => console.log(err));

    }
}