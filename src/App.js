import "./App.css";
import { useState, useCallback, useMemo } from "react";
import Child from "./Child";

function App() {
    console.log("+ render parent");
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    const caculate = (number) => {
        for (let i = 0; i < 100000000; i++) {
            number += 1;
        }
        return number;
    };
    const hugeCalculate = useMemo(() => caculate(number), [number]);
    // const hugeCalculate = caculate(number);

    // const incrFunc = () => {
    //     setNumber((prev) => prev + 1);
    // };
    const incrFunc = useCallback(() => {
        setNumber((prev) => prev + 1);
    }, []);
    return (
        <div className="App">
            <div className="container">
                <button
                    onClick={() => setNumber((prevNumber) => prevNumber + 1)}
                >
                    increase
                </button>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="type your text"
                />
                <p>{hugeCalculate}</p>
                <p>parent</p>
                <Child incrFunc={incrFunc} number={number} />
            </div>
        </div>
    );
}

export default App;
