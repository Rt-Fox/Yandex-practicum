import React, {useEffect,useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from "./ModalOverlay.module.css"

const ModalOverlay = ({handleClickClose}) => {
    const listen = useCallback((event) => {
        if (event.defaultPrevented) {
            return;
        }
        if (event.key === 'Esc' || event.key === 'Escape') {
            handleClickClose(event)
        }
    },[handleClickClose]);

    useEffect(()=>{
        // Устанавливаем слушатель события при монтировании
        document.addEventListener("keydown", listen);
        // Сбрасываем слушатель события при удалении компонента из DOM
        return () => {
            document.removeEventListener("keydown", listen);
        }
    }, [listen]);
    return (
        <div onClick={
            (event) =>
                (event.target.classList.contains('ModalOverlay'))?
                    handleClickClose(event)
                    :
                    null
            } className={'ModalOverlay ' + styles.ModalOverlay}>
        </div>

    );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
    handleClickClose:PropTypes.func.isRequired
};