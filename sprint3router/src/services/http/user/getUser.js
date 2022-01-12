import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setProfile} from "../../actions/userAction";
import {postToken} from "../auth/postToken";
import {catchResponse} from "../catchResponse";

export const getUser = () => {

    return dispatch => {
        fetch(`${url}/auth/user`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem(`token`))?.accessToken
            },
            method: 'GET',
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setProfile({email: response.user.email, name: response.user.name}))
                }
            })
            .catch(err => {
                    catchResponse(err, dispatch)
                }
            )


    }
}