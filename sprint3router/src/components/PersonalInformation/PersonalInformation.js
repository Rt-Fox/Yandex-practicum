import React, {useCallback} from 'react';
import styles from './PersonalInformation.module.css'
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {
    cleanPersonalInformation,
    cleanPersonalInformationState,
    setPersonalInformation
} from "../../services/actions/personalInformationAction";
import {pathUser} from "../../services/http/user/pathUser";

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const user = useSelector(state =>  state.user.user)

    const personalInfo = useSelector(state =>  state.personalInfo)

    const onChange = e => {
        dispatch(setPersonalInformation({name: e.target.name, value: e.target.value}))
    }

    const cancel = () => {
        dispatch(cleanPersonalInformationState())
    }
    const submitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch(pathUser(personalInfo))
        },
        [personalInfo, dispatch]
    );
    const onIconClick = type => {
            if (!personalInfo[type]) {
                dispatch(setPersonalInformation({name: type, value: user[type]}))
            } else {
                dispatch(cleanPersonalInformation({name: type}))
            }
        };

    return (
        <div className={styles['personal-information']}>
            <div className={'input__block mt-6'}>
                <Input
                    disabled={!personalInfo.name}
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={personalInfo.name?personalInfo.name:user.name}
                    icon={personalInfo.name?'CloseIcon':'EditIcon'}
                    onIconClick={() => {onIconClick('name')}}
                    name={'name'}
                    size={'default'}
                />
            </div>
            <div className={'input__block mt-6'}>
                <Input
                    disabled={!personalInfo?.email}
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={onChange}
                    onIconClick={() => {onIconClick('email')}}
                    value={personalInfo.email?personalInfo.email:user.email}
                    icon={personalInfo.email?'CloseIcon':'EditIcon'}
                    name={'email'}
                    size={'default'}
                />
            </div>
            <div className={'input__block mt-6'}>
                <Input
                    disabled={true}
                    type={'password'}
                    placeholder={'Пароль'}
                    value={''}
                    icon={'EditIcon'}
                    name={'password'}
                    size={'default'}
                    onChange={null}/>
            </div>
            {personalInfo.name || personalInfo.email?
                <div className='d-flex mt-4 align-self-end'>
                    <Button type="secondary" size="medium" onClick={cancel}>
                        Отмена
                    </Button>
                    <Button type="primary" size="medium" onClick={submitForm}>
                        Сохранить
                    </Button>
                </div>:null
            }

        </div>
    );
};

export default PersonalInformation;