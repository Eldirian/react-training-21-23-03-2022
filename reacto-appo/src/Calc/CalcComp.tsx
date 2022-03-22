enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

interface Props{
    number1: number,
    number2: number,
    operationType: Operation
}

    function add (a: number, b: number): number {return a + b};
    function subtract (a: number, b: number): number {return a - b};
    function multiply (a: number, b: number): number {return a * b};
    function divide (a: number, b: number): number {return a / b};

    function calculate(a: number, b: number, operation: Operation): number {
        switch (operation) {
            case Operation.ADD: return add(a, b);
            case Operation.SUBTRACT: return subtract(a, b);
            case Operation.MULTIPLY: return multiply(a, b);
            case Operation.DIVIDE: return divide(a, b);
        }
    }

const AppCalc = ({number1, number2, operationType}: Props) =>
{
    if(operationType === Operation.DIVIDE && number2 === 0)
    {
        return <h1>Nie dziel przez zero!</h1>
    }

    const result: number = calculate(number1,number2, operationType);
    return <h1>{result}</h1>
}

export {AppCalc, Operation}