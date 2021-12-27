import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {cleanUser} from "../../actions/userAction";
import {postToken} from "./postToken";

export const postLogout = () => {

    return dispatch => {
        fetch(`${url}/auth/logout`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem(`token`))?.accessToken
            },
            method: 'POST',
            body: JSON.stringify({'token': `${JSON.parse(localStorage.getItem(`token`))?.refreshToken}`})
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(cleanUser())
                }
            })
            .catch(errResponse => {
                    errResponse.json()
                        .then(err => {
                                if (err.message === "jwt expired") {
                                    dispatch(postToken())
                                } else {
                                    console.log(err.message)
                                }
                            }
                        )
                }
            );

    }
}