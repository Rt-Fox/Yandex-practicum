import React, {useEffect,useRef} from 'react';
import './App.css';
import AppHeader from "../components/Header/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import {useDispatch} from "react-redux";
import {getData} from "../services/actions/getData";



function App() {
    const firstRenderRef = useRef(true);
    const dispatch = useDispatch();


    useEffect(() => {
        if (firstRenderRef.current) {
            dispatch(getData())
        }
        firstRenderRef.current = false;
    });

    return (
        <div className="App">
            <AppHeader/>
            <main className='container'>
                <div className={'row title'}>
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

