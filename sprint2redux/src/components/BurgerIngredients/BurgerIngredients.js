import "./BurgerIngredients.css"
import React, {useEffect} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "./Ingredients/Ingredient";
import {useSelector} from "react-redux";

const BurgerIngredients = () => {

    const data = useSelector(state => state.data)

    const [current, setCurrent] = React.useState('bun');

    useEffect(() => {
        const section = document.getElementById('burger-ingredients_section')
        let bunH = document.getElementById('bun').offsetTop-section.offsetTop;
        let sauceH = document.getElementById('sauce').offsetTop-section.offsetTop;
        section?.addEventListener("scroll", ()=>{
            if (current === 'bun') {
                if (bunH+(sauceH-bunH)/2 < section.scrollTop ) {
                    setCurrent('sauce')
                }
            }
        })
        return section.removeEventListener("scroll", ()=>{})
    }, [])
    useEffect(() => {
        const section = document.getElementById('burger-ingredients_section')
        let bunH = document.getElementById('bun').offsetTop-section.offsetTop;
        let sauceH = document.getElementById('sauce').offsetTop-section.offsetTop;
        let mainH = document.getElementById('main').offsetTop-section.offsetTop;
        section?.addEventListener("scroll", ()=>{
            if (current === 'sauce') {
                if (bunH+(sauceH-bunH)/2 > section.scrollTop ) {
                    setCurrent('bun')
                }
                if (sauceH+(mainH-sauceH)/2 < section.scrollTop ) {
                    setCurrent('main')
                }
            }
        })
        return section.removeEventListener("scroll", ()=>{})
    }, [current])
    return (
        <section className='left-section'>
            <article className='tab'>
                <Tab value="bun" active={current === 'bun'} onClick={
                    () => {
                        const el = document.getElementById('bun');
                        el.scrollIntoView({behavior: "smooth"});
                    }
                }>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={
                    () => {
                        const el = document.getElementById('sauce');
                        el.scrollIntoView({behavior: "smooth"});
                    }
                }>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={
                    () => {
                        const el = document.getElementById('main');
                        el.scrollIntoView({behavior: "smooth"});
                    }
                }>
                    Начинки
                </Tab>
            </article>
                <article className='ingredients' id='burger-ingredients_section'>
                <div id={'bun'}>
                    <h3 className='title_ingredients'>Булки</h3>
                    <div className='list_ingredients'>
                        {data.data_bun?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item}/>
                            </div>
                        )}
                    </div>
                </div>
                <div id={'sauce'}>
                    <h3 className='title_ingredients'>Соусы</h3>
                    <div className='d-flex flex-wrap'>
                        {data.data_sauce?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item}/>
                            </div>
                        )}
                    </div>
                </div>
                <div id={'main'}>
                    <h3 className='title_ingredients'>Начинки</h3>
                    <div className='d-flex flex-wrap'>
                        {data.data_main?.map((item) =>
                            <div key={item._id}>
                                <Ingredient item={item}/>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </section>
    )
};
export default BurgerIngredients;

