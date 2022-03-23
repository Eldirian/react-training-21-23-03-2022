import { useDispatch } from "react-redux";
import { Operation } from "./Calculator"
import { clearHistory } from "./features/calculator/calculator-slice";

interface Props {
    calculate: (operation: Operation) => void;
}

const CalculatorActions = ({calculate }: Props) => {
    const dispatch = useDispatch();
    return <>
            <button onClick={() => calculate(Operation.ADD)}>+</button>
            <button onClick={() => calculate(Operation.SUBTRACT)}>-</button>
            <button onClick={() => calculate(Operation.MULTIPLY)}>*</button>
            <button onClick={() => calculate(Operation.DIVIDE)}>/</button>
            <button onClick={() => dispatch(clearHistory())}>Wyczyść historię</button>
        </>
}

export {CalculatorActions}