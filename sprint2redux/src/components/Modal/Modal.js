import React from 'react';
import './Modal.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
    const { children, header, handleClickClose } = props;
    return ReactDOM.createPortal(
        <>
            <ModalOverlay handleClickClose={handleClickClose} />
            <section className={'modal-self'}>
                <header className='modal-self_header mt-10 mr-10 ml-10'>
                    <CloseIcon onClick={()=>handleClickClose()} type="primary" />
                    <p className="text text_type_main-large">
                        {header}
                    </p>
                </header>
                {children}
            </section>
        </>,
        modalRoot
    );
};

export default Modal;

Modal.propTypes = {
    children: PropTypes.element,
    header: PropTypes.element,
    handleClickClose: PropTypes.element,
};