const arr = [1, 2, 3, 4, 5];

// zwykła pętla for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach
arr.forEach((el, index, array) => {
  console.log(el, index, array);
});

arr.forEach((el) => {
  console.log(el);
});

// map - stworzenie nowej tablicy poprzez przekształcenie elementów oryginalnej
const arr2 = arr.map((el) => el * el);

// filter - stworzenie nowej tablicy poprzez przefiltrowanie elementów innej tablicy
const arr3 = arr.filter((el) => {
  if (el % 2 === 0) return true;
});

// lub upraszczając
const arr4 = arr.filter((el) => el % 2 === 0);

// reduce - pozwala zredukować tablicę do pojedynczego elementu
// acc - akumulator który gromadzi wynik, domyślnie początkowo przyjmuje wartość pierwszego elementu tablicy
// curr - kolejny element w tablicy
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
});

// użycie reduce dla tablicy obiektów
// akumulator inicjalizujemy na 0 (wartość neutralna dla dodawania)
// wtedy curr przyjmuje pierwszy element z tablicy
const arrayOfObjects = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
  { a: 4 },
  { a: 5 },
  { a: 6 },
];

const sum2 = arrayOfObjects.reduce((acc, curr) => {
  return acc + curr.a;
}, 0);
