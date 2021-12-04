import React from 'react';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css'
const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
    const { children, header, handleClickClose } = props;
    return ReactDOM.createPortal(
        <div>
            <ModalOverlay handleClickClose={handleClickClose} />
            <section className={styles['modal-self']}>
                <header className={styles['modal-self_header']+' mt-10 mr-10 ml-10'}>
                    <CloseIcon onClick={()=>handleClickClose()} type="primary" />
                    <p className="text text_type_main-large">
                        {header}
                    </p>
                </header>
                {children}
            </section>
        </div>,
        modalRoot
    );
};

export default Modal;

Modal.propTypes = {
    children: PropTypes.element,
    header: PropTypes.string,
    handleClickClose: PropTypes.func,
};