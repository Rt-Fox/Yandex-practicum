import {setData, setDataBun, setDataMain, setDataSauce} from "../reducers/datasReducer";
import {setIngredientsBun} from "../reducers/ingredientsReducer";


let url = 'https://norma.nomoreparties.space/api/ingredients';

export const getData = () => {

    return dispatch => {
        fetch(`${url}`, {
            method: 'GET',
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response.status);
            })
            .then(response => {
                // положим все элементы в дату
                setData(response.data);
                const data_bun = [];
                const data_sauce = [];
                const data_main = [];
                response.data.forEach((item,index) => {
                     item.type === 'bun'?
                         data_bun.push(item)
                         :
                     item.type === 'sauce'?
                         data_sauce.push(item)
                         :
                         data_main.push(item)
                });
                dispatch(setDataBun(data_bun));
                dispatch(setDataSauce(data_sauce));
                dispatch(setDataMain(data_main));
                // положим первый элемент булку в выбранные товары, так как без нее, все равно заказ не сделать
                dispatch(setIngredientsBun(response.data.find((item) => item.type==='bun')))
            })
            .catch(err => console.log(err))
    }
}