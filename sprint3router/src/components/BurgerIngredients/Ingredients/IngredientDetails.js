import React from 'react';
import styles from "../../Modal/Modal.module.css"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const IngredientDetails = () => {
    const { id } = useParams();
    const data = useSelector(state => state.data)

    const item = data.data_main.find(item => item._id===id) || data.data_bun.find(item => item._id===id) || data.data_sauce.find(item => item._id===id);

    if (!item) {
        return <div className={styles.container}>
                    <p className="text text_type_main-large text-center">
                        Ингридиент не найден
                    </p>
                </div>
    }

    return (
        <main className={styles['modal-self_main'] + ' mb-15'}>
            <img src={item?.image_large} alt=""/>
            <p className="text text_type_main-medium mb-3 mt-3">
                {item?.name}
            </p>
            <div className={styles['modal-self_main__list'] +' mt-3'}>
                <div className={styles['modal-self_main__element']}>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item?.calories}</p>
                </div>
                <div className={styles['modal-self_main__element']}>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item?.calories}</p>
                </div>
                <div className={styles['modal-self_main__element']}>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item?.calories}</p>
                </div>
                <div className={styles['modal-self_main__element']}>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Углеводы, г</p>
                    <p className=" text text_type_digits-default text_color_inactive">
                        {item?.calories}</p>
                </div>
            </div>
        </main>
    );
};

export default IngredientDetails;

