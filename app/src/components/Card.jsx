import React from "react";
import { useDrag } from "react-dnd";
import protractorBig from "../protractorBig.svg";

function Card({ levt, tob }) {
    // let newData = [levt, tob ];

    // console.log("levt = ", levt);

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
                marginLeft: levt,
                marginTop: tob,
                width: 30,
            }}
            ref={dragRef}
        >
            <img src={protractorBig} alt="protractor" />
        </div>
    );
}

export default Card;
