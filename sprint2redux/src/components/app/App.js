import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import styles from "./App.module.css"
import {getData} from "../../services/http/getData";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import AppHeader from "../Header/AppHeader";

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

