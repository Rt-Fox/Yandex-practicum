import React from 'react';

const OrderDetails = () => {
    const order_info = {
        number: '034536',
        img: './images/done.png',
        status: 'Ваш заказ начали готовить',
    }
    return (
        <main className={'modal-self_main mt-3'}>
            <p className="text text_type_digits-large modal-self_main__order mb-3">{order_info.number}</p>
            <p className="text text_type_main-medium">
                идентификатор заказа
            </p>
            <img className='mt-15 mb-15' src={order_info.img} alt=""/>
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