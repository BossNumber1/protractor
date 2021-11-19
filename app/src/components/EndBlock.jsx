import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

function EndBlock({ card, moveCard }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    });
    return (
        <div
            className="endBlock"
            ref={dropRef}
            style={{
                backgroundColor: isOver ? "#bbb" : "red",
            }}
        >
            {card ? <Card /> : "Начало фигуры"}
        </div>
    );
}

export default EndBlock;
