import { Operation } from "./Calculator"

interface Props {
    calculate: (operation: Operation) => void;
    clearHistory: () => void;
}

const CalculatorActions = ({calculate, clearHistory}: Props) => {
    return <>
            <button onClick={() => calculate(Operation.ADD)}>+</button>
            <button onClick={() => calculate(Operation.SUBTRACT)}>-</button>
            <button onClick={() => calculate(Operation.MULTIPLY)}>*</button>
            <button onClick={() => calculate(Operation.DIVIDE)}>/</button>
            <button onClick={clearHistory}>Wyczyść historię</button>
        </>
}

export {CalculatorActions}