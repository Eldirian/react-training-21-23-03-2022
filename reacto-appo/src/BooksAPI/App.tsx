import { useEffect, useState } from "react"

interface googleBooksResp {
    title: string
}

const App = () =>
{
    const [result, setResult] = useState<googleBooksResp>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => 
    {
        getBookTitle();
    }, []);

    const getBookTitle = async() =>
    {
        setLoading(true);
        try {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting',
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json'
                }
            });
            var kek = await response.json();
            // const data: googleBooksResp = await response.json();
            console.log(kek);
            setResult(kek);
            
        } catch (error) {
            setResult(undefined);
        }
        setLoading(false);
    }

    if(loading) return <h1>Trwa ładowanie danych, proszę czekać.</h1>
    if(!result) return <h1>Wystąpił błąd!</h1>
    return <h1>Tytuł książki to: {result.title}.</h1>
}

export {App}