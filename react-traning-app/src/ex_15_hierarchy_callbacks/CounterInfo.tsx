interface Props {
    counter: number;
}

const CounterInfo = ({counter}: Props) => {
    return <h1>{counter}</h1>
}

export {CounterInfo}