import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setToken} from "../../actions/userAction";
import {catchResponse} from "../catchResponse";

export const postToken = (func) => {

    return dispatch => {
        fetch(`${url}/auth/token`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({'token': `${JSON.parse(localStorage.getItem(`token`))?.refreshToken}`})
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setToken({accessToken: response.accessToken, refreshToken: response.refreshToken}))
                    dispatch(func)
                }
            })
            .catch(err => {
                    catchResponse(err, dispatch)
                }
            )

    }
}