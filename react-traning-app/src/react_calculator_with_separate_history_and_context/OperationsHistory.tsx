import { useContext } from "react"
import { CalculatorContext } from "./Calculator"

const OperationsHistory = () => {
    const calculator = useContext(CalculatorContext);
    return <ul>
            {calculator.history.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
}

export {OperationsHistory}