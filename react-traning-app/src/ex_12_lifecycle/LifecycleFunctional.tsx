import { useEffect } from "react"

interface Props {
    name: string
}

const LifecycleFunctional = ({name}: Props) => {
    useEffect(() => {
        console.log('USE EFFECT - MOUNT');

        return () => {
            console.log('USE EFFECT - UNMOUNT')
        }
    }, []);

    useEffect(() => {
        console.log('USE EFFECT - NAME CHANGED');
    }, [name])

    return <h1>{name}</h1>
}

export {LifecycleFunctional}