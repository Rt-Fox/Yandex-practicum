import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Not-found.module.css';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const NotFound404 = () => {
    return (
        <div id={'NotFound404'}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className="text text_type_main-large">
                        Такой страницы нет.
                    </p>
                    <Link to='/'>
                        <Button type="secondary" size="large">
                            Перейти в конструктор
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};