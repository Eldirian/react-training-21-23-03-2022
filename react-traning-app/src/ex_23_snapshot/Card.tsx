import { getApplicationColorsScheme } from "./utils"

const Card = () => {
    return <div style={{
        backgroundColor: getApplicationColorsScheme().primary
    }}>
        Lorem ipsum
    </div>
}

export { Card }