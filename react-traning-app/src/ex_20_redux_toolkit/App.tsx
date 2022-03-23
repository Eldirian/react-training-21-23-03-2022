import { Provider } from "react-redux"
import { Header } from "./Header"
import { store } from "./store"
import { UserForm } from "./UserForm"

const App = () => {
    return <Provider store={store}>
        <Header />
        <UserForm />
    </Provider>
}

export { App }