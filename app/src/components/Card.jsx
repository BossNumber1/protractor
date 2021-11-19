import React from "react";
import { useDrag } from "react-dnd";
import protractorBig from "../protractorBig.svg";

function Card() {
    const [{ isDragging }, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    return (
        <div
            className="protractorBig"
            style={{
                backgroundColor: isDragging ? "#fff" : "gold",
            }}
            ref={dragRef}
        >
            <img src={protractorBig} alt="protractor" />
        </div>
    );
}

export default Card;
