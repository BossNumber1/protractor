import "./styles.css";
import { useState } from "react";
import Box from "./components/Box";
import Box2 from "./components/Box2";

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
