import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setUser} from "../../actions/userAction";
import {postToken} from "./postToken";
import {catchResponse} from "../catchResponse";

export const postLogin = (form) => {

    return dispatch => {
        fetch(`${url}/auth/login`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setUser(response))
                }
            })
            .catch(err => {
                    catchResponse(err, dispatch)
                }
            )

    }
}