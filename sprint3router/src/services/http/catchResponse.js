import {postToken} from "./auth/postToken";

export const catchResponse = (err, dispatch) => {
    if (err.message === "jwt expired") {
        dispatch(postToken())
    } else {
        console.log(err.message)
    }
};
