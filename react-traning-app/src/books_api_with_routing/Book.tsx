import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { BookRes } from "./Books";

const Book = () => {
    const navigate = useNavigate();
    const [book, setBook] = useState<BookRes>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getBook();
    }, [])

    const getBook = async() => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            const result: BookRes = await response.json();
            setBook(result);
        } catch(e) {
            console.log(e);
        }
    }

    const goBack = () => {
        navigate('/');
    }

    if(!book) return <p>Brak danych</p>

    return <>
       <h1>{book.volumeInfo.title}</h1>
       <p>{book.volumeInfo.authors.join(', ')}</p>
       <button onClick={goBack}>Wróć</button>
    </>
}

export { Book }