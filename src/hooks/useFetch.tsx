import { useEffect, useState } from "react"

function useFetch(url: string) {
    const [result, setResult] = useState<any>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                },
            }).then((response) => {
                setError(false)
                return response.json()
            }).then((data) => {
                setResult(data)
            })
        } catch (err) {
            setError(true)
        }
    }, [url])

    return { result, error }
}

export default useFetch;