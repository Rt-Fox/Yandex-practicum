import React, {useEffect} from 'react';
import AppHeader from "../components/Header/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import {useDispatch} from "react-redux";
import {getData} from "../services/http/getData";

import styles from "./App.module.css"

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getData())
    },[]);

    return (
        <div className="App">
            <AppHeader/>
            <main className='container'>
                <div className={'row '+ styles.title}>
                    <h1>Соберите бургер</h1>
                </div>
                {
                <div className='d-flex'>
                        <BurgerIngredients />
                        <BurgerConstructor />
                </div>
                }
            </main>
        </div>
  );
}

export default App;

