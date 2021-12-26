import React, {useEffect} from 'react';
import IngredientDetails from "../components/BurgerIngredients/Ingredients/IngredientDetails";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../services/http/getData";
import styles from "./IngredientPage.module.css";

const IngredientPage = () => {
    let { id } = useParams();
    const data = useSelector(state => state.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    },[]);
    const item = data.data_main.find(item => item._id===id) || data.data_bun.find(item => item._id===id) || data.data_sauce.find(item => item._id===id);
    console.log(item)
    console.log(id)
    return (
        <main id={'IngredientPage'}>
            <div className={styles.container}>
                <p className="text text_type_main-large text-center">
                    Детали ингредиента
                </p>
                <IngredientDetails item={item} />
            </div>
        </main>
    );
};

export default IngredientPage;