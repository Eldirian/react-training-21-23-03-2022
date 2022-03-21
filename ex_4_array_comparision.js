const a = [1, 2, 3, 4];

// Nie zadziała ponieważ porównujemy referencją zamiast wartości tablicy
if (a === [1, 2, 3, 4]) {
  console.log('tablica jest identyczna');
}

// Musimy porównać każdy element
function areArrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
