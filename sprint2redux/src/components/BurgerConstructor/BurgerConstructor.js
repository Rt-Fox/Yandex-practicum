import React, {useState} from "react";
import {Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../Order/OrderDetails";
import ModalModule from "../Modal/Modal";
import TotalPrice from "../TotalPrice/TotalPrice";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import DraggableElement from "./DraggableElement";
import {moveIngredients, setIngredientsBun, setNewIngredients} from "../../services/actions/ingredientsAction";
import {getOrder} from "../../services/http/getOrder";
import styles from "./BurgerConstructor.module.css"


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
        const arr = ingredients.ingredients.map(item => {return item._id})
        arr.push(ingredients.ingredients_bun._id)
        arr.unshift(ingredients.ingredients_bun._id)

        dispatch(getOrder({"ingredients": arr}));
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false)
    };
    const moveElement = (dragIndex, hoverIndex, item) => {
        dispatch(moveIngredients({dragIndex: dragIndex,hoverIndex: hoverIndex,dragIngredients: item }));
    };
    return (
        <section ref={dropTarget} className={styles['right-section'] + ''}>
            <p className='text text_type_main-default'>Перенесите сюда булку и ингредиенты</p>
            <div className='d-flex flex-column' style={{  gap: '16px' }}>
                {ingredients.ingredients_bun?
                    <div className='ml-10'>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={ingredients.ingredients_bun.name}
                            price={ingredients.ingredients_bun.price}
                            thumbnail={ingredients.ingredients_bun.image_mobile}
                        />
                    </div>
                    :
                    null
                }
                <div className={styles['ingredients-list']} style={{  gap: '16px' }} >
                    {ingredients.ingredients.map((ingredient,index) =>
                        <DraggableElement id={ingredient.id} ingredient={ingredient} index={index} key={ingredient.id} moveElement={moveElement}/>
                    )}
                </div>
                {ingredients.ingredients_bun?
                <div className='ml-10'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={ingredients.ingredients_bun.name}
                        price={ingredients.ingredients_bun.price}
                        thumbnail={ingredients.ingredients_bun.image_mobile}
                    />
                </div>:null
                }
            </div>
            <footer>
                <div className={styles.button}> </div>
                <TotalPrice />
                <div className={styles.button}>
                    {ingredients?.ingredients_bun?.type==='bun'?
                        <Button onClick={()=> handleClickOpen()} type="primary" size="large" >
                            Оформить заказ
                        </Button>
                        :null
                    }
                    {open&& <ModalModule children={<OrderDetails />} handleClickClose={handleClickClose} header={''}/>}
                </div>
            </footer>
        </section>
    )
};
export default BurgerConstructor;
