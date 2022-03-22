interface Props {
    onButtonClick: () => void;
}

const CounterButton = ({onButtonClick}: Props) => {
    return <button onClick={onButtonClick}>Click me!</button>
}

export {CounterButton}