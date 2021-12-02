import React, {useContext, useEffect} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "./TotalPrice.css"
import {IngredientsContext, PriceContext} from "../Services/DataContext";

const TotalPrice = () => {
    const [ingredients] = useContext(IngredientsContext);
    const [price, setPrice] = useContext(PriceContext)

    useEffect(
        () => {
            let total = 0;
            ingredients.map(item => (total += item.type==='bun'?item.price*2:item.price));
            setPrice(total)
        },
        [ingredients]
    );
    return (
        <div className='summ_price'>
            <p className="text text_type_digits-medium">{price}</p>
            <CurrencyIcon style={{width: '33px'}} type="primary" />
        </div>
    );
};

export default TotalPrice;