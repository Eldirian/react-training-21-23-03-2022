import { Hello } from "./Hello"
import { HelloClass } from "./HelloClass"

const App = () => {
    return <>
        <Hello name='Marcin' age={28} />
        <HelloClass name='Marcin' age={28} />
    </>
}

export { App }