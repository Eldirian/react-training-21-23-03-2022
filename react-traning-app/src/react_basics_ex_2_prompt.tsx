import { Component } from "react";

const App = () => {
    const a = window.prompt('Podaj pierwszą wartość');
    const b = window.prompt('Podaj drugą wartość');

    if(a === null || b === null) return <h1>Musisz podać obie wartości</h1>

    return <div>
        {a} + {b} = {parseFloat(a) + parseFloat(b)}
    </div>
}

class AppClass extends Component {
    render() {
        const a = window.prompt('Podaj pierwszą wartość');
        const b = window.prompt('Podaj drugą wartość');

        if(a === null || b === null) return <h1>Musisz podać obie wartości</h1>

        return <div>
            {a} + {b} = {parseFloat(a) + parseFloat(b)}
        </div>
    }
}

export { App }