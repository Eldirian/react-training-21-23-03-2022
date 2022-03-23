import { useEffect, useState } from "react"

interface IPResponse {
    ip: string
}

const App = () => {
    const [result, setResult] = useState<IPResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getMyIp();
    }, [])

    const getMyIp = async() => {
        setLoading(true);
        try {
            const response = await fetch('https://api.ipify.org?format=json', {
                method: 'GET', // DELETE, POST, PUT, PATCH
                // body: JSON.stringify({}), // payload zapytania
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data: IPResponse = await response.json();
            setResult(data);
        } catch(e) {
            setResult(undefined);
        }
        setLoading(false);
    }

    if(loading) return <h1>Trwa ładowanie danych, proszę poczekać.</h1>
    if(!result) return <h1>Wystąpił błąd.</h1>
    return <h1>Moje IP to: {result.ip}</h1>
}

export { App }