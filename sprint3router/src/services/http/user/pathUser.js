import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {setProfile} from "../../actions/userAction";
import {postToken} from "../auth/postToken";

export const pathUser = (body) => {
    if (body.email === '') {
        delete body['email']
    }
    if (body.name === '') {
        delete body['name']
    }
    if (body.password === '') {
        delete body['password']
    }
    return dispatch => {
        fetch(`${url}/auth/user`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem(`token`))?.accessToken
            },
            method: 'PATH',
            body: JSON.stringify(body)
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(setProfile({email: response.user.email, name: response.user.name}))
                }
                if (response.message === 'You should be authorised') {
                    dispatch(postToken())
                }
            })
            .catch(errResponse => {
                    errResponse.json()
                        .then(err => {
                                if (err.message === "jwt expired") {
                                    dispatch(postToken())
                                }
                            }
                        )
                }
            )

    }
}