// przekazanie wielu parametrów do funkcji
function foo(...vals) {
  console.log(vals);
}

function bar(a, b, ...vals) {
  console.log(a, b, vals);
}
