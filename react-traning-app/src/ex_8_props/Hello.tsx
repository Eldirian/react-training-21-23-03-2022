interface Props {
   name: string;
   age: number;
}

// v1 - bez destrukturyzacji
// const Hello = (props: Props) => {
//     return <h1>Hello {props.name}, your age is {props.age}</h1>
// }

// v2 - destrukturyzacja wewnątrz komponentu
// const Hello = (props: Props) => {
//     const { name, age } = props;
//     return <h1>Hello {name}, your age is {age}</h1>
// }

// v3 - destrukturyzacja wewnątrz listy parametrów
const Hello = ({ name, age }: Props) => {
    return <h1>Hello {name}, your age is {age}</h1>
}

export {Hello}