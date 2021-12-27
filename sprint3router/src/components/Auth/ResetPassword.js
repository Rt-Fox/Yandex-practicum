import React, {useCallback, useEffect, useState} from 'react';
import styles from "./Auth.module.css"
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cleanResetPassword, setFormNewPassword} from "../../services/actions/resetPasswordAction";
import {postPasswordReset} from "../../services/http/resetPassword/postPasswordReset";

const ResetPassword = () => {
    const dispatch = useDispatch();

    const checkEmailData = useSelector(state => state.resetPassword.checkEmailData)
    const form = useSelector(state => state.resetPassword.formNewPassword)
    const isAuth = useSelector(state => state.user.success)

    const [passwordShow, setPasswordShow] = useState(false)

    const onChange = e => {
        dispatch(setFormNewPassword({...form, [e.target.name]: e.target.value}));
    };

    const submitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch(postPasswordReset(form))
        },
        [form, dispatch]
    );

    useEffect(() => {
        return () => dispatch(cleanResetPassword())
    }, [dispatch])

    if (isAuth) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }

    if (!checkEmailData.success) {
        return (
            <Redirect
                to={{
                    pathname: '/forgot-password'
                }}
            />
        );
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium">
                Восстановление пароля
            </p>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={'input__block mt-6'}>
                    <Input
                        type={passwordShow ? 'text' : 'password'}
                        placeholder={'Введите новый пароль'}
                        onChange={onChange}
                        value={form.password}
                        name={'password'}
                        onIconClick={
                            () => setPasswordShow(!passwordShow)
                        }
                        icon={passwordShow ? 'HideIcon' : 'ShowIcon'}
                        size={'default'}
                    />
                </div>
                <div className={'input__block mt-6'}>
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onChange}
                        value={form.token}
                        name={'token'}
                        error={false}
                        size={'default'}
                    />
                </div>
                <div className={'mt-6'}>
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </form>
            <div className={styles.inline + ' mt-20'}>
                <p className="text text_type_main-default text_color_inactive">
                    Вспомнили пароль?
                </p>
                <Link to={'/login'}>
                    <Button type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ResetPassword;