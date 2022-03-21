interface Vehicle {
    name: string;
    power: string;
}

interface Car {
    wheels: number;
    wheelSide: 'left' | 'right';
}

type SteeredVehicle = Vehicle & Car;

const vehicle: SteeredVehicle = {
    name: 'test',
    power: 'test',
    wheelSide: 'left',
    wheels: 4
}