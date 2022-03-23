import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { CalculatorActions } from "./CalculatorActions";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorInputs } from "./CalculatorInputs";
import { addToHistory } from "./features/calculator/calculator-slice";

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

export interface FormValues {
    a: number,
    b: number
}

const Calculator = () => {
    const dispatch = useDispatch();

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
        dispatch(addToHistory(operationResult));
        setResult(operationResult);
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

    return <>
            <CalculatorInputs onInputChange={handleInputChange} values={values} />
            <CalculatorActions calculate={calculate} />
            <h1>{result}</h1>
            <CalculatorHistory />
        </>
}

export { Calculator, Operation }