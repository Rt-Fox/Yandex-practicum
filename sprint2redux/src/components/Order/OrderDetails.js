import React from 'react';
import {useSelector} from "react-redux";
import styles from "../Modal/Modal.module.css"


const OrderDetails = () => {
    const order = useSelector(state => state.order)
    return (
        <main className={styles['modal-self_main'] + ' mt-3'}>
            <p className={styles['modal-self_main__order'] + " text text_type_digits-large mb-3"}>{order.order.number}</p>
            <p className="text text_type_main-medium">
                идентификатор заказа
            </p>
            <img className='mt-15 mb-15' src={'/images/done.png'} alt=""/>
            <p className={styles['modal-self_main__info'] + " text text_type_main-medium mb-1"}>
                {order.order.status}
            </p>
            <p className={styles['modal-self_main__info'] + " mb-30 modal-self_main__info text text_type_main-medium text_color_inactive"}>
                Дождитесь готовности на орбитальной станции
            </p>
        </main>
    );
};

export default OrderDetails;

