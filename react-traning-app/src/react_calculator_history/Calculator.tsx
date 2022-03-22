import { useEffect, useState } from "react";

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

interface Props {
    a: number;
    b: number;
    operation: Operation
}

// v3
const Calculator = ({a, b, operation}: Props) => {
    const [history, setHistory] = useState<string[]>([]);
    const [result, setResult] = useState<string>();

    useEffect(() => {
        const operationResult = getResult();
        addToHistory(operationResult);
        setResult(operationResult);
    }, []);

    const addToHistory = (line: string) => {
        setHistory(prevHistory => [...prevHistory, line]);
    }   

    const getResult = () => {
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
            <h1>{result}</h1>
            <ul>
                {history.map((line, index) => <li key={index}>{line}</li>)}
            </ul>
        </>
}

export {Calculator, Operation}