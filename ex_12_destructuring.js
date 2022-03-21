// Destrukturyzacja tablicy

const a = [1, 2, 3, 4, 5];

// wyciągnięcie n-tego elementu, stary sposób
const el1 = a[0];
const el2 = a[1];
const el3 = a[2];
const el5 = a[4];
console.log(el1, el2, el3, el5);

// wyciągnięcie n-tego elementu, nowy sposób (ale nie zawsze wskazany przez czytelność)
const [n1, n2, n3, , n5] = a;
console.log(n1, n2, n3, n5);

// destrukturyzacja tablic przydaje się najbardziej przy wyciąganiu początkowych elementów
// dla dalszych - lepiej użyć indeksu

// Destrukturyzacja obiektu
const foo = { b: 10, c: 20, d: 50 };

// stary sposób
const val1 = foo.b;
const val3 = foo.d;

// nowy sposób
const { b, c: val_c, d } = foo;
console.log(b, val_c, d);

// tworzenie nowego obiektu BEZ danej właściwości
const { c, ...rest } = foo;
console.log(rest); // Obiekt rest będzie zawierać właściwości b oraz d
