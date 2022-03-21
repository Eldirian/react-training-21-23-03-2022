// Przepisz poniższą funkcję na funkcję strzałkową (nie używaj metod tablicowych):

const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
