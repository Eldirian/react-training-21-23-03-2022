import { useEffect, useState } from "react"

interface IPResponse {
    ip: string
}

const App = () => {
    const [result, setResult] = useState<IPResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        runInParallel();
        runInOrder();
    }, [])

    const runInParallel = () => {
        console.log('START PARALLEL');
        getMyIp();
        getMyIpInPlainText();
        console.log('READY PARRALEL');
    }

    const runInOrder = async() => {
        console.log('START IN ORDER');
        await getMyIp();
        await getMyIpInPlainText();
        console.log('READY IN ORDER');
    }

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
            console.log('GOT DATA 1', data);
            setResult(data);
        } catch(e) {
            setResult(undefined);
        }
        setLoading(false);
    }

    const getMyIpInPlainText = async() => {
        try {
            const response = await fetch('https://api.ipify.org', {
                method: 'GET', // DELETE, POST, PUT, PATCH
            });
            const data = await response.text();
            console.log('GOT DATA 2', data);

        } catch(e) {

        }

    }

    if(loading) return <h1>Trwa ładowanie danych, proszę poczekać.</h1>
    if(!result) return <h1>Wystąpił błąd.</h1>
    return <h1>Moje IP to: {result.ip}</h1>
}

export { App }