import { FormEvent, useState } from "react"

interface FormData {
    firstName: string;
    lastName: string;
    age: string;
}

const App = () => {
    const [values, setValues] = useState<FormData>({
        firstName: '',
        lastName: '',
        age: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prevValues => ({
          ...prevValues,
          [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
        <input type="number" name="age" value={values.age} onChange={handleChange} />
        <button type="submit">Wyślij!</button>
    </form>
}

export { App }