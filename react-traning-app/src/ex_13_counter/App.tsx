import { useState } from "react"
import { Counter } from "./Counter"

const App = () => {
    const [isVisible, setVisible] = useState<boolean>(true);

    if(!isVisible) return null;

    return <Counter />
}

export {App}