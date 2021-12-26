import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setProfile} from "../../actions/userAction";

export const pathUser = (body) => {

    return dispatch => {
        fetch(`${url}/auth/user`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem(`token`))?.accessToken
            },
            method: 'PATH',
            body: JSON.stringify(body)
        }) .then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setProfile({email:response.user.email, name: response.user.name}))
                }
            })
            .catch(err => console.log(err));

    }
}