import React, {useContext, useState} from 'react';
import "./Ingredient.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "./IngredientDetails";
import Modal from "../../Modal/Modal";
import {menuItemPropTypes} from "../../../utils/constants";
import {IngredientsContext} from "../../Services/DataContext";

const Ingredient = ({item}) => {
    const [open, setOpen] = useState(false);
    const [ingredients, setIngredients] = useContext(IngredientsContext);

    const handleClickOpen = () => {
        if (item.type === 'bun') {
            if (ingredients[0]?.type === 'bun') {
                setIngredients(ingredients.shift())
            }
            setIngredients([item, ...ingredients])
        } else {
            setIngredients([...ingredients,item])
        }
        setOpen(true)
    };
    const handleClickClose = () => {
        setOpen(false)
    };
    return (
        <>
            <div onClick={() => {
                    handleClickOpen()
                }
            } className='card_ingredient'>
                <div className='card_ingredient__top'>
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
