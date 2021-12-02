import React, {useContext} from 'react';
import {OrderContext} from "../../Services/DataContext";


const OrderDetails = () => {
    const order_info = {
        number: '034536',
        img: './images/done.png',
        status: 'Ваш заказ начали готовить',
    };
    const [order] = useContext(OrderContext);

    return (
        <main className={'modal-self_main mt-3'}>
            <p className="text text_type_digits-large modal-self_main__order mb-3">{order.order.number}</p>
            <p className="text text_type_main-medium">
                идентификатор заказа
            </p>
            <img className='mt-15 mb-15' src={'/images/done.png'} alt=""/>
            <p className="modal-self_main__info text text_type_main-medium mb-1">
                {order_info.status}
            </p>
            <p className="mb-30 modal-self_main__info text text_type_main-medium text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p>
        </main>
    );
};

export default OrderDetails;

