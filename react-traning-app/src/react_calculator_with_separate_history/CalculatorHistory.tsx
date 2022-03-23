import { OperationsHistory } from "./OperationsHistory"

interface Props {
    history: string[]
}

const CalculatorHistory = ({history}: Props) => {
    return <div> 
        <h2>Historia operacji</h2>
        <OperationsHistory history={history} />
    </div>
}

export {CalculatorHistory}