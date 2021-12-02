import "./BurgerConstructor.css"
import React, {useCallback, useRef, useState} from "react";
import {Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../Order/OrderDetails";
import Modal from "../Modal/Modal";
import TotalPrice from "../TotalPrice/TotalPrice";
import {
    moveIngredients,
    setIngredients,
    setIngredientsBun,
    setNewIngredients
} from "../../services/reducers/ingredientsReducer";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../../services/actions/getOrder";
import {useDrop} from "react-dnd";
import DraggableElement from "./DraggableElement";
import update from "immutability-helper";

const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.ingredients);
    const [open, setOpen] = useState(false);
    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item) {
            item.type==='bun'?
                dispatch(setIngredientsBun(item))
                :
                dispatch(setNewIngredients(item))
        },
    });

    const handleClickOpen = () => {
        let data = {"ingredients": [ingredients.ingredients_bun._id, ingredients.ingredients.map(item => {return item._id})]};
        dispatch(getOrder(data));
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false)
    };
    const moveElement = (dragIndex, hoverIndex, item) => {
        dispatch(moveIngredients({dragIndex: dragIndex,hoverIndex: hoverIndex,dragIngredients: item }));
    };
    return (
        <section ref={dropTarget} className='right-section'>
            <div className='d-flex flex-column' style={{  gap: '16px' }}>
                <div className=' ml-10'>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={ingredients.ingredients_bun.name}
                        price={ingredients.ingredients_bun.price}
                        thumbnail={ingredients.ingredients_bun.image_mobile}
                    />
                </div>
                <div className='ingredients_list' style={{  gap: '16px' }} >
                    {ingredients.ingredients.map((ingredient,index) =>
                        <DraggableElement id={ingredient.id} ingredient={ingredient} index={index} key={ingredient.id} moveElement={moveElement}/>
                    )}
                </div>
                <div className='ml-10'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={ingredients.ingredients_bun.name}
                        price={ingredients.ingredients_bun.price}
                        thumbnail={ingredients.ingredients_bun.image_mobile}
                    />
                </div>
            </div>
            <footer>
                <div className='button'> </div>
                <TotalPrice />
                <div className='button'>
                    {ingredients.ingredients_bun.type==='bun'?
                        <Button onClick={()=> handleClickOpen()} type="primary" size="large" >
                            Оформить заказ
                        </Button>
                        :null
                    }
                    {open&& <Modal children={<OrderDetails />} handleClickClose={handleClickClose}  header={''}/>}
                </div>
            </footer>
        </section>
    )
};
export default BurgerConstructor;
