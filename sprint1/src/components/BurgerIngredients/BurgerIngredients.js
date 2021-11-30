import "./BurgerIngredients.css"
import React, {useEffect} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "./Ingredients/Ingredient";
import {menuItemPropTypes} from "../../utils/constants";

const BurgerIngredients = ({data}) =>{
    const [current, setCurrent] = React.useState('bun');

    useEffect(()=> {
        const el = document.getElementById(current);
        el.scrollIntoView({behavior: "smooth"});
    },[current])
    const data_bun = data?.filter(item => {
            return item.type === 'bun'
    })
    const data_sauce = data?.filter(item => {
        return item.type === 'sauce'
    })
    const data_main = data?.filter(item => {
        return item.type === 'main'
    })

    return (
        <section className='left-section'>
            <article className='tab'>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </article>
            <article className='ingredients'>
                <div id={'bun'}>
                    <h3 className='title_ingredients'>Булки</h3>
                    <div className='list_ingredients'>
                        {data_bun?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item} />
                            </div>
                        )}
                    </div>
                </div>
                <div id={'sauce'}>
                    <h3 className='title_ingredients'>Соусы</h3>
                    <div className='d-flex flex-wrap'>
                        {data_sauce?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item} />
                            </div>

                        )}
                    </div>
                </div>
                <div id={'main'}>
                    <h3 className='title_ingredients'>Начинки</h3>
                    <div className='d-flex flex-wrap'>
                        {data_main?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item} />
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </section>
    )
};
export default BurgerIngredients;

BurgerIngredients.propTypes = menuItemPropTypes;