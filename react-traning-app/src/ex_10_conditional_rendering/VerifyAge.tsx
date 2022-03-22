interface Props {
    age: number;
}

const VerifyAge = ({age}: Props) => {
    if(age < 18) return <h1>Jesteś za młody!</h1>

    return <div>
        <p>Bar zaprasza Cię bardzo serdecznie na alkohol</p>
        <h1>Zapraszamy do środka!</h1>
    </div>
}


export {VerifyAge}