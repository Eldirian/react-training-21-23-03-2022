import React, { useState } from "react"

const App = () => {
    const [counter, setCount] = useState<number>(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event.screenX);
        setCount(prevCount => prevCount + 1);
    }

    const selectCar = (car: string, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(`You selected ${car}`);
        if(event) console.log(event);
    }

    return <>
        <button onClick={handleClick}>Click me! Already clicked {counter} times</button>
        <button onClick={() => selectCar('Mercedes')}>Mercedes</button>
        <button onClick={() => selectCar('Opel Corsa')}>Opel Corsa</button>
        <button onClick={(e) => selectCar('Fiat Punto', e)}>Fiat Punto</button>
    </>
}

export { App }