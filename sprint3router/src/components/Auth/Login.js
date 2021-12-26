import React, {useCallback} from 'react';
import styles from "./Auth.module.css"
import {Link, Redirect} from 'react-router-dom';
import {PasswordInput, Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {setFormLogin} from "../../services/actions/authorizationActions";
import {postLogin} from "../../services/http/auth/postLogin";

const Login = () => {
    const dispatch = useDispatch();
    const form = useSelector(state =>  state.authorization.formLogin)
    const isAuth = useSelector(state =>  state.user.success)


    const onChange = e => {
        dispatch(setFormLogin({ ...form, [e.target.name]: e.target.value }));
    };
    const submitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch(postLogin(form))
        },
        [form]
    );
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
                Вход
            </p>
            <div className={'input__block mt-6'}>
                <Input
                    type={'email'}
                    placeholder={'E-mail'}
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    size={'default'}
                />
            </div>
            <div className={'input__block mt-6'}>
                <PasswordInput onChange={onChange} value={form.password} name={'password'} />
            </div>
            <div className={'mt-6'}>
                <Button type="primary" size="medium" onClick={submitForm}>
                    Войти
                </Button>
            </div>
            <div className={styles.inline + ' mt-20'}>
                <p className="text text_type_main-default text_color_inactive">
                    Вы — новый пользователь?
                </p>
                <Link to={'/register'}>
                    <Button type="secondary" size="medium">
                        Зарегистрироваться
                    </Button>
                </Link>
            </div>
            <div className={styles.inline + ' mt-4'}>
                <p className="text text_type_main-default text_color_inactive">
                    Забыли пароль?
                </p>
                <Link to={'/forgot-password'}>
                    <Button type="secondary" size="medium">
                        Восстановить пароль
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;