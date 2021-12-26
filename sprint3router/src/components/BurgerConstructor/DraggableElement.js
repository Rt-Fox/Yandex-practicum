import React, { useRef} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {deleteIngredients} from "../../services/actions/ingredientsAction";
import PropTypes from "prop-types";
import styles from "./DtaggableElement.module.css"

const DraggableElement = ({id, ingredient, index, moveElement}) => {
    const dispatch = useDispatch()
    const delIngredients = (index) => {
        dispatch(deleteIngredients(index))
    };
    const ref = useRef(null);

    const [{ handlerId }, drop] = useDrop({
        accept: 'sort',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveElement(dragIndex, hoverIndex, item.ingredient);
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: 'sort',
        item: () => {
            return { ingredient, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));
    return (
        <div ref={ref} className={'d-flex align-items-center'} data-handler-id={handlerId}>
            <span className='m-2'>
                <DragIcon type="primary" />
            </span>
            <ConstructorElement
                text={ingredient?.name}
                price={ingredient?.price}
                thumbnail={ingredient?.image_mobile}
                handleClose={()=>delIngredients(index)}
            />
        </div>
    );
};

export default DraggableElement;

DraggableElement.propTypes = {
    id: PropTypes.number.isRequired,
    ingredient: PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
    moveElement: PropTypes.func.isRequired

};