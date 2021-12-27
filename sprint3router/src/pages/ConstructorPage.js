import React from 'react';
import styles from "./Constructor.module.css";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";

const ConstructorPage = () => {

    return (
        <main id={'ConstructorPage'}>
            <div className='container'>
                <div className={'row '+ styles.title}>
                    <h1>Соберите бургер</h1>
                </div>
                {
                    <div className='d-flex'>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </div>
                }
            </div>
        </main>
    );
};

export default ConstructorPage;