import { useContext } from "react"
import { CalculatorContext } from "./Calculator"

const CalculatorInputs = () => {
    const calculator = useContext(CalculatorContext)
    return <form>
        <input type='number' name='a' value={calculator.values.a} onChange={calculator.onInputChange} />
        <input type='number' name='b' value={calculator.values.b} onChange={calculator.onInputChange} />
    </form>
}

export { CalculatorInputs }