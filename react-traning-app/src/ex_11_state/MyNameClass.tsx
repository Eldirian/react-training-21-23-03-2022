import { Component } from "react";

interface Props {
    defaultName: string;
}

interface State {
    name: string;
    age: number;
}

class MyNameClass extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            name: props.defaultName,
            age: 28
        }
    }

    render() {
        const {name, age} = this.state;
        return <h1>My name is { name } and I am { age } years old</h1>
    }
}

export { MyNameClass }