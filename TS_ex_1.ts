enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

class Calculator {
    private add(a: number, b: number): number {
        return a + b
    }

    private subtract(a: number, b: number): number {
        return a - b
    }

    private multiply(a: number, b: number): number {
        return a * b
    }

    private divide(a: number, b: number): number {
        if (b === 0) throw new Error('Dividing by 0 is prohibited!')
        return a / b
    }

    calculate(a: number, b: number, operation: Operation): number {
        switch (operation) {
            case Operation.ADD: return this.add(a, b);
            case Operation.SUBTRACT: return this.subtract(a, b);
            case Operation.MULTIPLY: return this.multiply(a, b);
            case Operation.DIVIDE: return this.divide(a, b);
        }
    }
}

const calculator = new Calculator();

console.log(calculator.calculate(10, 50, Operation.MULTIPLY));
console.log(calculator.calculate(10, 50, Operation.ADD));
console.log(calculator.calculate(10, 50, Operation.SUBTRACT));
console.log(calculator.calculate(10, 50, Operation.DIVIDE));