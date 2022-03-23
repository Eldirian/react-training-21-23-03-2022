import { useContext } from "react"
import { CalculatorContext, Operation } from "./Calculator"

const CalculatorActions = () => {
    const calculator = useContext(CalculatorContext);

    const onCalculate = (operation: Operation) => {
        if(typeof calculator.calculate === 'function') {
            calculator.calculate(operation);
        }
    }

    return <>
            <button onClick={() => onCalculate(Operation.ADD)}>+</button>
            <button onClick={() => onCalculate(Operation.SUBTRACT)}>-</button>
            <button onClick={() => onCalculate(Operation.MULTIPLY)}>*</button>
            <button onClick={() => onCalculate(Operation.DIVIDE)}>/</button>
            <button onClick={calculator.clearHistory}>Wyczyść historię</button>
        </>
}

export {CalculatorActions}