// Stworzenie nowej tablicy z nowymi elementami
const a = [1, 2, 3];
const newA = [10, 20, 10, 4, ...a];

// Stworzenie nowego obiektu z nowymi polami
const obj1 = {
  a: 10,
};

const obj2 = {
  ...obj1,
  b: 20,
};
