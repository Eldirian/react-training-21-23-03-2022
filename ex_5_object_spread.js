const foo = {
  a: 10,
  b: 100,
  c: 1000,
};

const bar = foo; // kopiujemy referencję czyli obiekty foo i bar są tym samym

// Modyfikując foo zmieniamy również bar
foo.a = 1;
foo.d = 1000;

// Kopię tworzymy z użyciem spread operatora
const baz = { ...foo };

// Należy uważać na struktury z wielokrotnym zagnieżdżeniem
const buz = {
  a: 10,
  b: 20,
  c: {
    cc: 100,
    dd: 200,
  },
};

const copy = { ...buz }; // Skopiuje obiekt buz ALE buz.c dalej będzie miało skopiowaną referencję!
// więc copy.c to będzie to samo co buz.c. Więc kopii należy dokonać dla każdego zagnieżdżenia:
const deepCopy = {
  ...buz,
  c: {
    ...buz.c,
  },
};
