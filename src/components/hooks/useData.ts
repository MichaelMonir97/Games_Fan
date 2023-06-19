import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResult<T>{
    count:number
    results: T[]
}

const useData = <T>(endpoint: string,requestedParams?: AxiosRequestConfig, deps?: any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    const abort = new AbortController()
      setLoading(true)
      apiClient
        .get<FetchResult<T>>(endpoint,{signal: abort.signal, ...requestedParams})
        .then((resp) => {
          setLoading(false)
          setData(resp.data.results)})
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setLoading(false)
        });

    return () => abort.abort()
    }, deps ? [...deps] : [] );

    return { data, setData,error,isLoading}
}


export default useData