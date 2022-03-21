// utworzenie zmiennej w ES5
var a = 10;

// utworzenie zmiennej w ES6
let b = 200;

// utworzenie stałej - pamiętamy że stała odnosi się do referencji - jeżeli przechowuje typ prosty to nie możemy nadpisać,
// ale nic nie stoi na przeszkodzie żeby zmodyfikować (nie nadpisać!) obiekt/tablicę na którą wskazuje referencja.
const c = 200;

const arr = [1, 2, 3];
// arr = [1, 2, 4, 5, 6]; - błąd
arr.push(5); // - dopuszczalne, że nie zmieniamy referencji ale modyfikujemy zawartość tablicy
