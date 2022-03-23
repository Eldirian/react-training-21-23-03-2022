import React, { useContext } from "react"

interface AppContextState {
    primaryColor: string;
    userName?: string;
}

const AppContext = React.createContext<AppContextState>({
    primaryColor: 'blue',
})

const Header = () => {
    return <header>
        <UserDetails />
        <ButtonPrimary />
    </header>
}

const UserDetails = () => {
    const appContext = useContext(AppContext);

    if(!appContext.userName) return null;

    return <h1>{appContext.userName}</h1>
}

const ButtonPrimary = () => {
    const appContext = useContext(AppContext);

    return <button style={{
        backgroundColor: appContext.primaryColor
    }}>Click me!</button>
}

const App = () => {
    return (
        <>
            <AppContext.Provider value={{
                primaryColor: 'green',
                userName: 'Marcin'
            }}>
               <Header  />
            </AppContext.Provider>
            <AppContext.Provider value={{
                primaryColor: 'red'
            }}>
                <ButtonPrimary />
            </AppContext.Provider>

            <ButtonPrimary />
        </>
    )
}

export { App }