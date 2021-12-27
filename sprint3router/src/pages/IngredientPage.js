import React from 'react';
import IngredientDetails from "../components/BurgerIngredients/Ingredients/IngredientDetails";
import styles from "./IngredientPage.module.css";

const IngredientPage = () => {

    return (
        <main id={'IngredientPage'}>
            <div className={styles.container}>
                <p className="text text_type_main-large text-center">
                    Детали ингредиента
                </p>
                <IngredientDetails  />
            </div>
        </main>
    );
};

export default IngredientPage;