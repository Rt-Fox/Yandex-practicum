import React from "react";
import {BurgerIcon,ListIcon,ProfileIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css"
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const AppHeader = () => {
    const location = useLocation();

    return (
    <header className={styles.AppHeader}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
                <div className='col d-flex align-items-center'>
                    <Link to='/' className='d-flex'>
                        {location.pathname==="/"?
                            <>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default ml-2">Конструктор</p>
                            </>
                            :
                            <>
                                <BurgerIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive ml-2">Конструктор</p>
                            </>
                        }
                    </Link>
                    <Link to='/orders' className='d-flex'>
                        {location.pathname.includes("/orders")?
                            <>
                                <ListIcon type="primary" />
                                <p className="text text_type_main-default ml-2">Лента заказа</p>
                            </>
                            :
                            <>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive ml-2">Лента заказа</p>
                            </>
                        }
                    </Link>
                </div>
                <Link to={'/'} className='w-auto'>
                    <Logo />
                </Link>
                <Link to='/profile' className='col d-flex justify-content-end' >
                    {location.pathname.includes("/profile")?
                        <>
                            <ProfileIcon type="primary" />
                            <p className="text text_type_main-default ml-2">Личный кабинет</p>
                        </>
                        :
                        <>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
                        </>
                    }

                </Link>
            </div>
        </div>
    </header>
    );
};
export default AppHeader;
