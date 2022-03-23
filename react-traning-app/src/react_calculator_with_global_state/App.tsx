import { Provider } from "react-redux"
import { Calculator } from "./Calculator"
import { store } from "./store"

const App = () => {
    return <Provider store={store}>
        <Calculator />
    </Provider>
}

export {App}