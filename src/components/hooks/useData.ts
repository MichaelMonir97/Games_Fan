import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FetchResult<T>{
    count:number
    results: T[]
}

const useData = <T>(endpoint: string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    const abort = new AbortController()
      setLoading(true)
      apiClient
        .get<FetchResult<T>>(endpoint,{signal: abort.signal})
        .then((resp) => {
          setLoading(false)
          setData(resp.data.results)})
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setLoading(false)
        });

    return () => abort.abort()
    }, []);

    return { data, error,isLoading}
}


export default useData