import { useParams } from "react-router-dom"

const Facility = () => {
    const { id } = useParams<{ id: string }>();

    return <h1>Facility with ID { id }</h1>
}

export { Facility }