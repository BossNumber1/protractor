import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

function Box2({ card, moveCard }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    });

    return (
        <div
            className="box2"
            ref={dropRef}
            style={{
                backgroundColor: isOver ? "#bbb" : "red",
            }}
        >
            {card ? <Card /> : "Место куда перемещать"}
        </div>
    );
}

export default Box2;
