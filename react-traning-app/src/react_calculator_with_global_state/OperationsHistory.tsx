import { useSelector } from "react-redux"
import { RootState } from "./store"

const OperationsHistory = () => {
    const { history } = useSelector((store: RootState) => store.calculator);
    return <ul>
            {history.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
}

export {OperationsHistory}