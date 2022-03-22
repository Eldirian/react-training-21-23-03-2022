import { useState } from "react";
import { CalculatorActions } from "./CalculatorActions";

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

interface Props {
    a: number;
    b: number;
}

const Calculator = ({a, b}: Props) => {
    const [history, setHistory] = useState<string[]>([]);
    const [result, setResult] = useState<string>();

    const calculate = (operation: Operation) => {
        const operationResult = getResult(operation);
        addToHistory(operationResult);
        setResult(operationResult);
    }

    const addToHistory = (line: string) => {
        setHistory(prevHistory => [...prevHistory, line]);
    }   

    const clearHistory = () => {
        setHistory([]);
    }

    const getResult = (operation: Operation) => {
        switch(operation) {
            case Operation.ADD: return `${a} + ${b} = ${a + b}`;
            case Operation.SUBTRACT: return `${a} - ${b} = ${a - b}`;
            case Operation.MULTIPLY: return `${a} * ${b} = ${a * b}`;
            case Operation.DIVIDE: {
                if(b === 0) return 'Nie możesz dzielić przez 0!';
                return `${a} / ${b} = ${a / b}`;
            }
            default: return 'Musisz podać poprawną wartość!'
        }
    }

    return <>
            <CalculatorActions calculate={calculate} clearHistory={clearHistory} />
            <h1>{result}</h1>
            <ul>
                {history.map((line, index) => <li key={index}>{line}</li>)}
            </ul>
        </>
}

export {Calculator, Operation}