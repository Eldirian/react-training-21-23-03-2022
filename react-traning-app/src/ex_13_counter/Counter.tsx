import { useEffect, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('TICK');
            setCounter(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <h1>{counter}</h1>
}

export {Counter};