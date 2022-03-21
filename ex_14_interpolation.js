const result = 100;
const text = 'Wynik dodawania to ' + result + ' punktów.';

const text2 = `Wynik dodawania to ${result} punktów`;

const foo = (a, b) => {
  return a + b;
};

const number1 = 20;
const number2 = 30;

const text3 = `Wynik dodawania ${number1} i ${number2} to ${foo(
  number1,
  number2
)} punktów`;
