import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

var arr = [];

function StartBlock({ card, moveCard }) {
    // const [stor, setStor] = React.useState(false);

    const [{ isOver, getClientOffset }, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
            getClientOffset: monitor.getClientOffset(),
        }),
    });

    if (getClientOffset !== null) {
        // console.log("getClientOffset = ", getClientOffset);
        arr = getClientOffset;

        console.log("arr x =", arr.x);
        // setStor(getClientOffset);
    }

    return (
        <div
            className="startBlock"
            ref={dropRef}
            style={{
                // backgroundColor: "orange",
                backgroundColor: isOver ? "#bbb" : "red",
                // marginLeft: arr.x,
                // marginTop: getClientOffset.y,
            }}
        >
            {/* x = {arr.x} */}
            {/* {stor !== false && stor[0].x} */}
            {card ? <Card levt={arr.x} tob={arr.y} /> : "Место куда перемещать"}
        </div>
    );
}

export default StartBlock;
