const name = 'Marcin';
const lastName = 'Grygierek';
const age = 28;
const country = {
  city: 'Gliwice',
  capital: 'Warszawa',
};

const person = {
  name: name,
  lastName: lastName,
  age: age,
  country: { ...country }, // tutaj unikamy skróconego zapisu jeżeli potrzebujemy obiekt skopiować
};

console.log(person);

// wykorzystujemy fakt że nazwy stałych są identyczne jak docelowe nazwy pól obiektu
const person2 = {
  name,
  lastName,
  age,
  country: { ...country }, // tutaj unikamy skróconego zapisu jeżeli potrzebujemy obiekt skopiować
};

console.log(person2);
