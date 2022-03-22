import { ReactNode } from "react";

interface Props {
    age: number;
}

const VerifyAge2 = ({age}: Props) => {
    let content: ReactNode;

    if(age < 18) {
        content = <>
            <h1>Jesteś za młody!</h1>
            <button>Wróć do domu</button>
        </>
    } else {
        content = <h1>Zapraszamy do środka!</h1>
    }

    return <div style={{backgroundColor: '#aaa', margin: '0 auto', maxWidth: 800}}>
        <h1>Bar Jamajka</h1>
        {content}
    </div>
}

export {VerifyAge2}