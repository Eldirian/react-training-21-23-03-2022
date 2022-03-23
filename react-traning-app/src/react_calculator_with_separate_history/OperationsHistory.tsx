interface Props {
    history: string[]
}

const OperationsHistory = ({history}: Props) => {
    return <ul>
            {history.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
}

export {OperationsHistory}