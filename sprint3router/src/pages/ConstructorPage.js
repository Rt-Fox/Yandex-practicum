import React, {useEffect} from 'react';
import AppHeader from "../components/Header/AppHeader";
import styles from "./Constructor.module.css";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import {useDispatch} from "react-redux";
import {getData} from "../services/http/getData";

const ConstructorPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    },[]);
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