import { useEffect, useState } from "react"
import { BookRes } from "./Books";

interface Props {
    bookId: string;
}

const Book = ({bookId}: Props) => {
    const [book, setBook] = useState<BookRes>()

    useEffect(() => {
        getBook();
    }, [])

    const getBook = async() => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
            const result: BookRes = await response.json();
            setBook(result);
        } catch(e) {
            console.log(e);
        }
    }

    if(!book) return <p>Brak danych</p>

    return <>
       <h1>{book.volumeInfo.title}</h1>
    </>
}

export { Book }