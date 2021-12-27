import {url} from "../../../utils/constants";
import {checkResponse} from "../checkResponse";
import {cleanResetPassword} from "../../actions/resetPasswordAction";
import {postToken} from "../auth/postToken";

export const postPasswordReset = (form) => {

    return dispatch => {
        fetch(`${url}/password-reset/reset`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        }).then(checkResponse)
            .then(response => {
                if (response.success) {
                    dispatch(cleanResetPassword())
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