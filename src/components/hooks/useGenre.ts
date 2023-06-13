import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number
    name:string
}

interface GenreFetchResult{
    count:number
    results: Genre[]
}

const useGenre = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    const abort = new AbortController()
      setLoading(true)
      apiClient
        .get<GenreFetchResult>("/genres",{signal: abort.signal})
        .then((resp) => {
          setLoading(false)
          setGenres(resp.data.results)})
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setLoading(false)
        });

    return () => abort.abort()
    }, []);

    return {genres, error,isLoading}
}


export default useGenre