import { useState } from "react"

const App = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Change', e.target.value)
    }

    return <input type="text" value={value} onChange={handleChange} />
}

export { App }