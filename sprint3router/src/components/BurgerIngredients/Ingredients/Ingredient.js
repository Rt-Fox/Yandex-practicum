import React from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {menuItemPropTypes} from "../../../utils/constants";
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import styles from "./Ingredient.module.css"
import {Link, useLocation} from 'react-router-dom';

const Ingredient = ({item}) => {
    const location = useLocation();

    const ingredients = useSelector(state => state.ingredients);

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: item,
    });

    return (
        <Link
              to={{
                  pathname: `/ingredients/${item._id}`,
                  state: { background: location }
              }} ref={dragRef} className={styles.card_ingredient}>
            <div className={styles.card_ingredient__top}>
                {item.type==='bun'?
                    ingredients.ingredients_bun?._id === item._id?
                        <div className={styles.card_ingredient__count}>
                            <p className='text text_type_digits-default'>2</p>
                        </div>
                        :
                        null
                :
                    <div hidden={!ingredients.ingredients.reduce((total,x) => (x._id===item._id ? total+1 : total), 0)} className={styles.card_ingredient__count}>
                        <p className='text text_type_digits-default'>
                            {ingredients.ingredients.reduce((total,x) => (x._id===item._id ? total+1 : total), 0)}
                        </p>
                    </div>

                }
                <img className={styles.card_ingredient__image} src={item.image} alt=""/>
                <div className={styles.card_ingredient__price}>
                    <p className="text text_type_digits-default">{item.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <p className={styles.card_ingredient__name +' text text_type_main-default'}>{item.name}</p>
        </Link>
    );
};

export default Ingredient;

Ingredient.propTypes = {
    item: menuItemPropTypes.isRequired,
};
