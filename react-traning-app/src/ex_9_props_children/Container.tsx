import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Container = ({children}: Props) => {
    return <div style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: 10,
        backgroundColor: '#aaa'
    }}>
        <p>I am a container component</p>
        {children}
    </div>
}

export {Container}