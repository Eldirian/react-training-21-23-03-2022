import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";

export interface BookRes {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
    }
}
interface BooksRes {
    items: BookRes[];
}

const Books = () => {
    const [search, setSearch] = useState<string>('');
    const [books, setBooks] = useState<BookRes[]>([])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const getBooks = async() => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
            const result: BooksRes = await response.json();
            setBooks(result.items);
        } catch(e) {
            console.log(e);
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getBooks();
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' value={search} onChange={handleInputChange} />
            <button type='submit'>Szukaj</button>
        </form>
        <ul>
            {books.map(book => <li key={book.id}>
                {book.volumeInfo.title}
                <Link to={`/${book.id}`}>Szczegóły</Link>
            </li>)}
        </ul>
    </>
}

export { Books }