import React, {useEffect} from 'react';
import styles from './PersonalInformation.module.css'
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../services/http/user/getUser";
import {setProfile} from "../../services/actions/userAction";

const PersonalInformation = () => {
    const dispatch = useDispatch();

    const user = useSelector(state =>  state.user.user)
    useEffect(() => {
        dispatch(getUser())
    },[])

    const onChange = e => {
        dispatch(setProfile({...user, [e.target.name]: e.target.value}))
    }
    const onIconClick = (e) => {

    }
    return (
        <div className={styles['personal-information']}>

            <div className={'input__block mt-6'}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={user.name}
                    icon={'EditIcon'}
                    onIconClick={onIconClick}
                    name={'name'}
                    error={false}
                    size={'default'}
                />
            </div>
            <div className={'input__block mt-6'}>
                <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={onChange}
                    onIconClick={onIconClick}
                    value={user.email}
                    icon={'EditIcon'}
                    name={'name'}
                    error={false}
                    size={'default'}
                />
            </div>
            <div className={'input__block mt-6'}>
                <Input
                    type={'password'}
                    placeholder={'Пароль'}
                    onChange={onChange}
                    onIconClick={onIconClick}
                    value={user.password}
                    icon={'EditIcon'}
                    name={'name'}
                    error={false}
                    size={'default'}
                />
            </div>
        </div>
    );
};

export default PersonalInformation;