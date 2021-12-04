import {setData, setDataBun, setDataMain, setDataSauce} from "../actions/datasAction";
import {setIngredientsBun} from "../actions/ingredientsAction";
import {url} from "../utils/consts";
import {checkResponse} from "./checkResponse";

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
                response.data.forEach((item,index) => {
                     item.type === 'bun'?
                         dataBun.push(item)
                         :
                     item.type === 'sauce'?
                         dataSauce.push(item)
                         :
                         dataMain.push(item)
                });
                dispatch(setDataBun(dataBun));
                dispatch(setDataSauce(dataSauce));
                dispatch(setDataMain(dataMain));
            })
            .catch(err => console.log(err))
    }
}