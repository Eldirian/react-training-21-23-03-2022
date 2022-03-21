// Zadziała ponieważ hoisiting działa dla varów - JS przed uruchomieniem kodu
// przenosi "na górę" informacje o zmiennych zdefiniowanych przez var przez
// co nie ma błędu
console.log(foo); // dostaniemy undefined ponieważ wiemy że zmienna jest ale nie znamy wartości

var foo = 100;

// Zadziała bo hoisting przeniesie na górę informacje o definicji funkcji
baz();

function baz() {
  console.log('10000');
}

// Dostaniemy błąd - hoisting nie ma zastosowania dla let/const
console.log(bar);

let bar = 200;
