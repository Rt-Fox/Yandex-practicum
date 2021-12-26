import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setToken, setUser} from "../../actions/userAction";

export const postToken = (refreshToken) => {

    return dispatch => {
        fetch(`${url}/auth/token`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({'token': `{{${refreshToken}}}`})
        }) .then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setToken({accessToken: response.accessToken, refreshToken: response.refreshToken}))
                }
            })
            .catch(err => console.log(err));

    }
}