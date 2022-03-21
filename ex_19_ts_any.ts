// Zadziała bo any powoduje wyłączenie kontroli typu

const calculate1 = (value: any): number => {
    return value * value;
}

const a = 10;
console.log('NUMBER', calculate1(a));

const inputValue = '10';
console.log('STRING', calculate1(inputValue));

// w tym przypadku nie zadziała poprawnie bo operacja + jest inna dla string i number
const calculate2 = (value: any): number => {
    return value + value * value;
}

const b = 10;
console.log('NUMBER', calculate2(b));

const inputValue2 = '10';
console.log('STRING', calculate2(inputValue2));

// wymuszony typ wejściowy oraz konwersja wartości na poprawny typ przed podstawieniem do funkcji
const calculate3 = (value: number): number => {
    return value + value * value;
}

const c = 10;
console.log('NUMBER', calculate3(c));

const inputValue3 = '10';
console.log('STRING', calculate3(parseInt(inputValue3)));