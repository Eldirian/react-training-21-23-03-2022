import { useState } from "react"
import { LifecycleClass } from "./LifecycleClass"
import { LifecycleFunctional } from "./LifecycleFunctional";

const App = () => {
    const [isVisible, setVisible] = useState(true);

    if(!isVisible) return null;

    return <>
            <LifecycleClass name='Marcin' />
            <LifecycleFunctional name='Marcin' />
        </>
}

export {App}