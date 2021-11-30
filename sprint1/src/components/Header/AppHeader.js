import './AppHeader.css';
import React from "react";
import {BurgerIcon,ListIcon,ProfileIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader =()=>{
    return (
    <header className={'AppHeader'}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
                <div className='col d-flex align-items-center'>
                    <a href="/" className='d-flex'>
                        <BurgerIcon type="primary" />
                        <p>Конструктор</p>
                    </a>
                    <a href="/" className='d-flex'>
                        <ListIcon type="primary" />
                        <p>Лента заказа</p>
                    </a>
                </div>
                <div className='w-auto'>
                    <Logo />
                </div>
                <a href="/" className='col d-flex justify-content-end' >
                     <ProfileIcon type="primary" />
                     <p>Личный кобинет</p>
                </a>
            </div>
        </div>
    </header>
    );
};
export default AppHeader;