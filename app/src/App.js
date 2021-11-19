import "./styles.css";
import React from "react";
import EndBlock from "./components/EndBlock";
import StartBlock from "./components/StartBlock";

function App() {
    const [index, setIndex] = React.useState(1);

    function moveCard(i) {
        setIndex(i);
    }

    return (
        <div className="app">
            <StartBlock card={index === 2} moveCard={moveCard.bind(null, 2)} />
            <EndBlock card={index === 1} moveCard={moveCard.bind(null, 1)} />
        </div>
    );
}

export default App;
