import { Calculator, Operation } from "./Calculator"

const App = () => {
    return <Calculator a={10} b={20} operation={Operation.ADD} />
}

export {App}