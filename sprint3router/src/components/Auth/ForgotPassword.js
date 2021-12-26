import React, {useCallback, useEffect} from 'react';
import styles from "./Auth.module.css"
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setEmail} from "../../services/actions/resetPasswordAction";
import {checkEmail} from "../../services/http/resetPassword/checkEmail";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const form = useSelector(state =>  state.resetPassword.form)
    const checkEmailData = useSelector(state =>  state.resetPassword.checkEmailData)
    const isAuth = useSelector(state =>  state.user.success)

    const onChange = e => {
        dispatch(setEmail(e.target.value))
    };

    const submitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch(checkEmail(form))
        },
        [form]
    );
    useEffect(() => {
        if (checkEmailData?.success) {
            history.push('/reset-password')
        }
    }, [checkEmailData])

    if (isAuth) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }
    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium">
                Восстановление пароля
            </p>
            <div className={'input__block mt-6'}>
                <Input
                    type={'email'}
                    placeholder={'E-mail'}
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    error={false}
                    size={'default'}
                />
            </div>
            <div className={'mt-6'}>
                <Button type="primary" size="medium" onClick={submitForm}>
                    Восстановить
                </Button>
            </div>
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

export default ForgotPassword;