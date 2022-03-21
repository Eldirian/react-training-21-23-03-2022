// Na podstawie tablicy:
// const cars = [
//    {
//        name: 'Toyota',
//        isBroken: false,
//    },
//    {
//        name: 'Fiat',
//        isBroken: true,
//    },
//    {
//        name: 'Mercedes',
//        isBroken: false,
//    },
//    {
//        name: 'Porsche',
//        isBroken: true
//    }
// ]
// Przygotuj funkcję która stworzy nową tablicę tylko z zepsutymi samochodami i przekształci elementy do następującej postaci: [‘Samochód Fiat jest zepsuty’, ‘Samochód Porsche jest zepsuty’]

const cars = [
  {
    name: 'Toyota',
    isBroken: false,
  },
  {
    name: 'Fiat',
    isBroken: true,
  },
  {
    name: 'Mercedes',
    isBroken: false,
  },
  {
    name: 'Porsche',
    isBroken: true,
  },
];

// v1
const brokenCars = cars.filter((car) => {
  if (car.isBroken) return true;
});

const carsInfo = brokenCars.map((car) => {
  return `Samochód ${car.name} jest zepsuty`;
});

// v2
const brokenCars2 = cars.filter((car) => car.isBroken);
const carsInfo2 = brokenCars2.map((car) => `Samochód ${car.name} jest zepsuty`);

// v3
const filteredCarsInfo = cars
  .filter((car) => car.isBroken)
  .map((car) => `Samochód ${car.name} jest zepsuty`);
