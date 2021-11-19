import "./styles.css";
import { useDrag, useDrop } from "react-dnd";
import { useState } from "react";

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

function App() {
    const [index, setIndex] = useState(1);

    function moveCard(i) {
        setIndex(i);
    }

    return (
        <>
            <div className="app">
                <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
            </div>
            <Box2 card={index === 2} moveCard={moveCard.bind(null, 2)}></Box2>
        </>
    );
}

export default App;
