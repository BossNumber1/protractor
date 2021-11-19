import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

function Box({ card, moveCard }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    });
    return (
        <div
            className="box"
            ref={dropRef}
            style={{
                backgroundColor: isOver ? "#bbb" : "red",
            }}
        >
            {card ? <Card /> : "Начало фигуры"}
        </div>
    );
}

export default Box;
