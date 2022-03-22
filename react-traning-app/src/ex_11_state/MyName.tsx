import { useState } from "react"

interface Props {
    defaultName: string;
}

const MyName = ({defaultName}: Props) => {
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number>(28);

    return <h1>My name is {name} and I am {age} years old</h1>
}

export {MyName}