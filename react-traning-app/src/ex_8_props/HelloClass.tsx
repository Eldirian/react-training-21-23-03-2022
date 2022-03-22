import { Component } from "react";

interface Props {
    name: string;
    age: number;
}

class HelloClass extends Component<Props> {
    render() {
        // v1 - bez destrukturyzacji
        // return <h1>Hello {this.props.name}, your age is {this.props.age}</h1>

        // v2 - z destrukturyzacją
        const { name, age } = this.props;
        return <h1>Hello {name}, your age is {age}</h1>
    }
}

export {HelloClass}