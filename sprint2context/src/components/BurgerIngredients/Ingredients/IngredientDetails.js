import React from 'react';
import {menuItemPropTypes} from "../../../utils/constants";

const IngredientDetails = ({item}) => {
    return (
        <main className={'modal-self_main mb-15'}>
            <img src={item.image_large} alt=""/>
            <p className="text text_type_main-medium mb-3 mt-3">
                {item.name}
            </p>
            <div className='modal-self_main__list mt-3'>
                <div className='modal-self_main__element'>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item.calories}</p>
                </div>
                <div className='modal-self_main__element'>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item.calories}</p>
                </div>
                <div className='modal-self_main__element'>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">
                        {item.calories}</p>
                </div>
                <div className='modal-self_main__element'>
                    <p className="mb-1 text text_type_main-default text_color_inactive">
                        Углеводы, г</p>
                    <p className=" text text_type_digits-default text_color_inactive">
                        {item.calories}</p>
                </div>
            </div>
        </main>
    );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
    item: menuItemPropTypes.isRequired,
};
