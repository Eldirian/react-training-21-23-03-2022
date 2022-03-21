// w sytuacji braku parametrów - zostaną przyjęty ich wartości domyślny

function foo(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}

// Uwaga - ten kod nie jest poprawny! Ponieważ JS nie będzie wiedzieć który parametr ustawiamy
function foo(a = 1, b, c) {
  console.log(a, b, c);
}
