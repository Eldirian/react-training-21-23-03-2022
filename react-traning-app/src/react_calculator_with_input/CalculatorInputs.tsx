import { ChangeEvent } from "react"
import { FormValues } from "./Calculator"

interface Props {
    values: FormValues,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorInputs = ({values, onInputChange}: Props) => {
    return <form>
        <input type='number' name='a' value={values.a} onChange={onInputChange} />
        <input type='number' name='b' value={values.b} onChange={onInputChange} />
    </form>
}

export { CalculatorInputs }