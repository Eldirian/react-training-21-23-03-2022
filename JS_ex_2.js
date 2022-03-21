// Zmodyfikuj funkcję z poprzedniego zadania w taki sposób aby parametry do funkcji mogły zostać przekazane następująco - getSum(1, 2, 3, 4, 5) - bez konieczności przekazywania tablicy.

// v1
const getSum = (...vals) => {
  const sum = vals.reduce((acc, curr) => {
    return acc + curr;
  });
  return sum;
};

// v2
const getSum2 = (...vals) => {
  return vals.reduce((acc, curr) => {
    return acc + curr;
  });
};

// v3
const getSum3 = (...vals) => vals.reduce((acc, curr) => acc + curr);
