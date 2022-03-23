import React, { ChangeEvent, useState } from "react";
import { CalculatorActions } from "./CalculatorActions";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorInputs } from "./CalculatorInputs";

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

export interface FormValues {
    a: number;
    b: number;
}

interface CalculatorContextState {
    history: string[];
    values: FormValues;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    calculate?: (operation: Operation) => void;
    clearHistory?: () => void;
}

const CalculatorContext = React.createContext<CalculatorContextState>({
    history: [],
    values: {
        a: 0,
        b: 0
    }
})

const Calculator = () => {
    const [history, setHistory] = useState<string[]>([]);
    const [result, setResult] = useState<string>();
    const [values, setValues] = useState<FormValues>({
        a: 0,
        b: 0
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: parseFloat(e.target.value)
        }))
    }

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
        const { a, b } = values;
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

    return <CalculatorContext.Provider value={{
        history,
        values,
        calculate,
        clearHistory,
        onInputChange: handleInputChange
    }}>
            <CalculatorInputs />
            <CalculatorActions />
            <h1>{result}</h1>
            <CalculatorHistory />
        </CalculatorContext.Provider>
}

export { Calculator, Operation, CalculatorContext }