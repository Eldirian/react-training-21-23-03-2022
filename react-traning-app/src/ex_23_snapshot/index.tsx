interface Props {
    text: string;
    type: 'success' | 'error' | 'notice';
}

const Alert = ({text, type}: Props) => {
    const getBackgroundForType = () => {
        switch(type) {
            case 'success': return 'green';
            case 'error': return 'red';
            case 'notice': return 'lightblue';
        }
    }

    return <div
        style={{
            backgroundColor: getBackgroundForType()
        }}
    >{text}</div>
}

export { Alert }