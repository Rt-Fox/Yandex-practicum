import React, {useCallback, useRef} from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {deleteIngredients, setIngredients} from "../../Services/reducers/ingredientsReducer";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import update from 'immutability-helper';

const DraggableElement = ({item,index}) => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.ingredients);

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
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = ingredients.ingredients[dragIndex];
        dispatch(setIngredients((update(ingredients.ingredients, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }))));
    }, []);
    const [{ isDragging }, drag] = useDrag({
        type: 'sort',
        item: () => {
            return { item, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));
    return (
        <div ref={ref} className='d-flex align-items-center' data-handler-id={handlerId}>
            <span className='m-2'>
                <DragIcon type="primary" />
            </span>
            <ConstructorElement
                text={item?.name}
                price={item?.price}
                thumbnail={item?.image_mobile}
                handleClose={()=>delIngredients(index)}
            />
        </div>
    );
};

export default DraggableElement;