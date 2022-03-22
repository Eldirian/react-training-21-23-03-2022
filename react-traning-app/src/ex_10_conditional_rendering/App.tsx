import { MyName } from "./MyName"
import { VerifyAge } from "./VerifyAge"
import { VerifyAge2 } from "./VerifyAge2"
import { VerifyAge3 } from "./VerifyAge3"

const App = () => {
    return <>
        <h2>V1</h2>
        <VerifyAge age={18} />
        <h2>V2</h2>
        <VerifyAge2 age={18} />
        <h2>V3</h2>
        <VerifyAge3 age={18} />
        <h2>V4</h2>
        <MyName favouriteColor="yellow"/>
    </>
}

export { App }