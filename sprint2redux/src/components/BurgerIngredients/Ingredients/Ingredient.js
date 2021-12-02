import React, {useState} from 'react';
import "./Ingredient.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "./IngredientDetails";
import Modal from "../../Modal/Modal";
import {menuItemPropTypes} from "../../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {setIngredientsBun, setNewIngredients} from "../../../Services/reducers/ingredientsReducer";
import {useDrag} from "react-dnd";

const Ingredient = ({item}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const ingredients = useSelector(state => state.ingredients);

    const [{}, dragRef] = useDrag({
        type: "ingredient",
        item: item,
    });

    const handleClickOpen = () => {
        if (item.type==='bun') {
            dispatch(setIngredientsBun(item))
        } else {
            dispatch(setNewIngredients(item))
        }
        setOpen(true)
    };
    const handleClickClose = () => {
        setOpen(false)
    };
    return (
        <>
            <div ref={dragRef} onClick={() => {
                    handleClickOpen()
                }
            } className='card_ingredient'>
                <div className='card_ingredient__top'>
                    {item.type==='bun'?
                        ingredients.ingredients_bun._id === item._id?
                            <div className={'card_ingredient__count'}>
                                <p className='text text_type_digits-default'>1</p>
                            </div>
                            :
                            null
                    :

                        <div hidden={!ingredients.ingredients.reduce((total,x) => (x===item ? total+1 : total), 0)} className={'card_ingredient__count'}>
                            <p className='text text_type_digits-default'>
                                {ingredients.ingredients.reduce((total,x) => (x===item ? total+1 : total), 0)}
                            </p>
                        </div>

                    }
                    <img className='card_ingredient__image' src={item.image} alt=""/>
                    <div className='card_ingredient__price'>
                        <p className="text text_type_digits-default">{item.price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
                <p className='card_ingredient__name text text_type_main-default'>{item.name}</p>
            </div>
            {open&& <Modal children={<IngredientDetails item={item}/>} handleClickClose={handleClickClose}  header={'Детали ингредиента'}/>}

        </>

    );
};

export default Ingredient;

Ingredient.propTypes = {
    item: menuItemPropTypes.isRequired,
};
