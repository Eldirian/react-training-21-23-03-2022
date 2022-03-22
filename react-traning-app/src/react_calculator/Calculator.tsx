import { ReactNode } from "react";

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

// v1
// const Calculator = ({a, b, operation}: Props) => {
//     if(operation === Operation.ADD) return <h1>{a} + {b} = {a + b}</h1>;
//     if(operation === Operation.SUBTRACT) return <h1>{a} - {b} = {a - b}</h1>;
//     if(operation === Operation.MULTIPLY) return <h1>{a} * {b} = {a * b}</h1>;
//     if(operation === Operation.DIVIDE && b !== 0) return <h1>{a} / {b} = {a / b}</h1>;
//     else if(b === 0) return <h1>Nie możesz dzielić przez 0!</h1>

//     return <h1>Musisz przekazać poprawną wartość!</h1>
// }

// v2
// const Calculator = ({a, b, operation}: Props) => {
//     let result: ReactNode = <>Musisz przekazac poprawną wartość1</>;

//     if(operation === Operation.ADD) result = <>{a} + {b} = {a + b}</>;
//     if(operation === Operation.SUBTRACT) result = <>{a} - {b} = {a - b}</>;
//     if(operation === Operation.MULTIPLY)result = <>{a} * {b} = {a * b}</>;
//     if(operation === Operation.DIVIDE && b !== 0) result = <>{a} / {b} = {a / b}</>;
//     else if(b === 0) result = <>Nie możesz dzielić przez 0!</>

//     return <>{result}</>
// }

// v3
const Calculator = ({a, b, operation}: Props) => {

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

    return <h1>{getResult()}</h1>
}

export {Calculator, Operation}