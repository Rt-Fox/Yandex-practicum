import "./BurgerConstructor.css"
import React, {useContext, useState} from "react";
import {Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../Order/OrderDetails";
import Modal from "../Modal/Modal";
import {IngredientsContext, OrderContext} from "../Services/DataContext";
import TotalPrice from "../TotalPrice/TotalPrice";

const BurgerConstructor = () => {
    const [ingredients,setIngredients] = useContext(IngredientsContext);
    const [,setOrder] = useContext(OrderContext);

    const [open, setOpen] = useState(false);

    const deleteIngredients = (index) => {
        ingredients.splice(index,1)
        setIngredients([...ingredients])
    };
    const handleClickOpen = () => {
        let url = 'https://norma.nomoreparties.space/api/orders';
        let data = {"ingredients": ingredients.map(item => {return item._id})}
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response.status);
            })
            .then(response => {
                setOrder(response);
                setOpen(true);

            })
            .catch(err => console.log(err));
    };
    const handleClickClose = () => {
        setOpen(false)
    };

    return (
        <section className='right-section'>
            <div className='d-flex flex-column align-items-end' style={{  gap: '16px' }}>
                <div className='pr-4'>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={ingredients[0]?.name}
                        price={ingredients[0]?.price}
                        thumbnail={ingredients[0]?.image_mobile}
                    />
                </div>
                <div className='ingredients_list' style={{  gap: '16px' }} >
                    {ingredients.map((item,index) =>
                        <div className='d-flex align-items-center' key={index}>
                            {index===0&&item.type==='bun'?
                                null:
                                <>
                                    <span className='m-2'>
                                        <DragIcon type="primary" />
                                    </span>
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image_mobile}
                                        handleClose={()=>deleteIngredients(index)}
                                    />
                                </>
                            }

                        </div>
                    )}
                </div>
                {ingredients[0]?.type==='bun'?
                <div className='pr-4'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={ingredients[0]?.name}
                        price={ingredients[0]?.price}
                        thumbnail={ingredients[0]?.image_mobile}
                    />
                </div> : null}
            </div>
            <footer>
                <div className='button'> </div>
                <TotalPrice />
                <div className='button'>
                    {ingredients[0]?.type==='bun'?
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
