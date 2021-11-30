import React from "react";

export default function DropTarget(props) {
    const { puzzleElement, handleDrop,handleDrag, dropTargetIndex } = props;
    return (
        <li
            onDragOver={(e) => e.preventDefault()}
            {...(!puzzleElement.id && {
                onDrop: (e) => handleDrop(e, dropTargetIndex)
            })}
            className="listItem"
        >
            {puzzleElement.elementSrc && (
                <img
                    onDrag={(e) => handleDrag(e, puzzleElement)}
                    draggable
                    src={`./${puzzleElement.elementSrc}`}
                />
            )}
        </li>
    );
}
