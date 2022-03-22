import { MyName } from "./MyName"
import { MyNameClass } from "./MyNameClass"

const App = () => {
    return <>
        <MyName defaultName='Łukasz' />
        <MyNameClass defaultName='Marcin' />
    </>
}

export {App}