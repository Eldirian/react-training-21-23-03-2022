import { Calculator, Operation } from "./Calculator"

const App = () => {
    return <>
        <Calculator a={10} b={20} operation={Operation.ADD} />
        <Calculator a={10} b={20} operation={Operation.SUBTRACT} />
        <Calculator a={10} b={20} operation={Operation.MULTIPLY} />
        <Calculator a={10} b={20} operation={Operation.DIVIDE} />
        <Calculator a={10} b={0} operation={Operation.DIVIDE} />
    </>
}

export { App }