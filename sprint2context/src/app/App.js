import React, {useEffect,useRef,useState} from 'react';
import './App.css';
import AppHeader from "../components/Header/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import {DataContext,IngredientsContext,PriceContext,OrderContext} from "../components/Services/DataContext";

let url = 'https://norma.nomoreparties.space/api/ingredients';


function App() {
    const firstRenderRef = useRef(true);

    const dataState = useState( [] );
    const ingredientsState = useState( [] );
    const priceState = useState( 0 );
    const orderState = useState( {} );

    const [data, setData] = dataState;
    const [,setIngredients] = ingredientsState;

    useEffect(() => {
        if (firstRenderRef.current) {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(response.status);
                })
                .then(response => {
                   setData(response.data);
                   setIngredients([response.data.find((item) => item.type==='bun')])
                })
                .catch(err => console.log(err));
        }
        firstRenderRef.current = false;
    });

    return (
        <DataContext.Provider value={dataState}>
            <IngredientsContext.Provider value={ingredientsState}>
                <PriceContext.Provider value={priceState}>
                    <OrderContext.Provider value={orderState}>
                        <div className="App">
                            <AppHeader/>
                            <main className='container'>
                                <div className={'row title'}>
                                    <h1>Соберите бургер</h1>
                                </div>
                                {data!==[] &&
                                <div className='d-flex'>
                                        <BurgerIngredients />
                                        <BurgerConstructor />
                                </div>
                                }
                            </main>
                        </div>
                    </OrderContext.Provider>
                </PriceContext.Provider>
            </IngredientsContext.Provider>
        </DataContext.Provider>
  );
}

export default App;

