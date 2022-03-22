import { Component } from "react";

interface Props {
    name: string;
}


class LifecycleClass extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log('CONSTRUCTOR');
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
    }

    componentDidUpdate(prevProps: Props) {
        const {name} = this.props;
        console.log('COMPONENT DID UPDATE');
        console.log('Previous name:', prevProps.name);
        console.log('Current name:', name);
    }

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT');
    }

    render() {
        const {name} = this.props;
        console.log('RENDER');
        return <h1>{name}</h1>
    }
}

export { LifecycleClass }