import React, {useEffect} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {setPrice} from "../../services/actions/priceAction";
import styles from "./TotalPrice.module.css"

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
        <div className={styles.summ_price}>
            <p className="text text_type_digits-medium">{price.total_price?price.total_price:0}</p>
            <CurrencyIcon style={{width: '33px'}} type="primary" />
        </div>
    );
};

export default TotalPrice;