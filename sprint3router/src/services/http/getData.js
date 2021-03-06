import {setData, setDataBun, setDataMain, setDataSauce} from "../actions/datasAction";
import {checkResponse} from "./checkResponse";
import {url} from "../../utils/constants";
import {postToken} from "./auth/postToken";
import {catchResponse} from "./catchResponse";

export const getData = () => {

    return dispatch => {
        fetch(`${url}/ingredients`, {
            method: 'GET',
        })
            .then(checkResponse)
            .then(response => {
                // положим все элементы в дату
                setData(response.data);
                const dataBun = [];
                const dataSauce = [];
                const dataMain = [];
                response.data.forEach((item, index) => {
                    item.type === 'bun' ?
                        dataBun.push(item)
                        :
                        item.type === 'sauce' ?
                            dataSauce.push(item)
                            :
                            dataMain.push(item)
                });
                dispatch(setDataBun(dataBun));
                dispatch(setDataSauce(dataSauce));
                dispatch(setDataMain(dataMain));
            })
            .catch(err => {
                    catchResponse(err, dispatch)
                }
            )
    }
}