import React from "react";
import { useDrag } from "react-dnd";

function Card() {
    const [{ isDragging }, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    return (
        <div
            className="kon"
            style={{
                backgroundColor: isDragging ? "#fff" : "gold",
            }}
            ref={dragRef}
        >
            <img src="https://clck.ru/YvbKU" alt="kon" />
        </div>
    );
}

export default Card;
