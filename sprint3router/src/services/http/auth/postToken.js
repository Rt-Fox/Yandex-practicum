import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setToken} from "../../actions/userAction";
import {getUser} from "../user/getUser";

export const postToken = () => {

    return dispatch => {
        fetch(`${url}/auth/token`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({'token': `${JSON.parse(localStorage.getItem(`token`))?.refreshToken}`})
        }) .then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setToken({accessToken: response.accessToken, refreshToken: response.refreshToken}))
                    dispatch(getUser())
                }
            })
            .catch(errResponse => {
                    errResponse.json()
                        .then(err => {
                            console.log(err.message)
                            }
                        )
                }
            );

    }
}