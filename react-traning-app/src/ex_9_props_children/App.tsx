import { Container } from "./Container"

const App = () => {
    return <>
        <Container>
            <h1>Lorem ipsum</h1>
        </Container>
        <Container>
            <div>
               <p>I am inside of a container component</p>
            </div>
        </Container>
    </>
}

export { App }