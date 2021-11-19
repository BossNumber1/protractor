import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

function StartBlock({ card, moveCard }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    });

    return (
        <div
            className="startBlock"
            ref={dropRef}
            style={{
                backgroundColor: isOver ? "#bbb" : "red",
            }}
        >
            {card ? <Card /> : "Место куда перемещать"}
        </div>
    );
}

export default StartBlock;
