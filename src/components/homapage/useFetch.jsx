import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            try{
            const res = await fetch(url)
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            const result = await res.json()
            setData(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    fetchData()
    },[url])

    return {data, loading, error}
}

export default useFetch