import React, {useEffect,useRef} from 'react';
import './App.css';
import AppHeader from "../components/Header/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";

let url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
    const firstRenderRef = useRef(true);
    const [data, setData] = React.useState(null)
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
                    setData(response.data)
                })
                .catch(err => console.log(err));
        }
        firstRenderRef.current = false;
    })

    return (
        <div className="App">
                <AppHeader/>
                <main className='container'>
                    <div className={'row title'}>
                        <h1>Соберите бургер</h1>
                    </div>
                    <div className='d-flex'>
                        <BurgerIngredients data={data}/>
                        <BurgerConstructor data={data}/>
                    </div>
                </main>
        </div>
  );
}

export default App;
