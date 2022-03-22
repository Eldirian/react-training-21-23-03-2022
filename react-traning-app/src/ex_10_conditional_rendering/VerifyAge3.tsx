interface Props {
    age: number;
}

const VerifyAge3 = ({age}: Props) => {
    return <h1
            style={{
                backgroundColor: age >= 18 ? 'green' : 'red'
            }}
            className={age >= 18 ? 'allowed' : 'denied'}
        >
            Masz {age >= 18 ? 'więcej' : 'mniej'} niż 18 lat.
        </h1>
}

export {VerifyAge3}