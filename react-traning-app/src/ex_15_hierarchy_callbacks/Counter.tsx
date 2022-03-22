import { useState } from "react"
import { CounterButton } from "./CounterButton";
import { CounterInfo } from "./CounterInfo";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return <>
        <CounterInfo counter={counter} />
        <CounterButton onButtonClick={handleClick} />
    </>
}

export { Counter }