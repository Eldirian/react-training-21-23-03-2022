// Przykład funkcji wyższego rzędu - setTimeout - jako pierwszy parametr przyjmuje funkcję która
// zostanie wywołana po 5000 ms
setTimeout(() => {
  console.log('Lorem ipsum');
}, 5000);

// Własna funkcja wyższego rzędu
const foo = (a, b, callback) => {
  const result = a + b;
  return callback(result);
};

foo(5, 15, (value) => {
  return value;
});

// wydzielenie funkcji do zewnętrznej stałej i przekazanie jej identyfikatora
const cb = (value) => {
  return Math.sqrt(value);
};

foo(400, 500, cb);
