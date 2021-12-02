import React, {useEffect} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "./TotalPrice.css"
import {useDispatch, useSelector} from "react-redux";
import {setPrice} from "../../services/reducers/priceReducer";

const TotalPrice = () => {
    const dispatch = useDispatch()

    const ingredients = useSelector(state => state.ingredients);
    const price = useSelector(state => state.price);

    useEffect(
        () => {
            let total = ingredients.ingredients_bun?.price*2;
            ingredients.ingredients?.map(item => (total += item?.price));
            dispatch(setPrice(total))
        },
        [ingredients]
    );
    return (
        <div className='summ_price'>
            <p className="text text_type_digits-medium">{price?.total_price}</p>
            <CurrencyIcon style={{width: '33px'}} type="primary" />
        </div>
    );
};

export default TotalPrice;