import React, {useCallback} from 'react';
import styles from "./Auth.module.css"
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setFormRegister} from "../../services/actions/authorizationActions";
import {postRegister} from "../../services/http/auth/postRegister";

const Register = () => {
    const dispatch = useDispatch();
    const form = useSelector(state =>  state.authorization.formRegister)
    const isAuth = useSelector(state =>  state.user.success)

    const onChange = e => {
        dispatch(setFormRegister({ ...form, [e.target.name]: e.target.value }));
    };
    const submitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch(postRegister(form))
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
                Регистрация
            </p>
            <div className={'input__block mt-6'}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={form.name}
                    name={'name'}
                    size={'default'}
                />
            </div>
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
                    Зарегистрироваться
                </Button>
            </div>
            <div className={styles.inline + ' mt-20'}>
                <p className="text text_type_main-default text_color_inactive">
                    Уже зарегистрированы?
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

export default Register;