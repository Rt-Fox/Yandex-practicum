import React, {useCallback} from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './ProfileNav.module.css'
import {postLogout} from "../../services/http/auth/postLogout";
import {useDispatch} from "react-redux";

const ProfileNav = () => {
    const dispatch = useDispatch();

    let location = useLocation();

    const logout = useCallback(
        e => {
            e.preventDefault();
            dispatch(postLogout())
        },
        []
    );
    return (
        <div className={styles['profile-nav']}>
            <Link
                to="/profile"
                className={styles.link}
            >
                <p className={location.pathname === "/profile"?'text text_type_main-medium':' text text_type_main-medium text_color_inactive'}>
                    Профиль
                </p>
            </Link>
            <Link
                to="/profile/orders"
                className={styles.link}
            >
                <p className={location.pathname === "/profile/orders"?'text text_type_main-medium':'text text_type_main-medium text_color_inactive'}>
                    История заказов
                </p>
            </Link>
            <Link
                to="/profile"
                onClick={logout}
                className={styles.link}
            >
                <p className="text text_type_main-medium text_color_inactive">
                    Выход
                </p>
            </Link>
            <p className='text text_type_main-small text_color_inactive mt-20' style={{opacity: '0.4'}}>
                В этом разделе вы можете
                изменить свои персональные данные
            </p>
        </div>
    );
};

export default ProfileNav;