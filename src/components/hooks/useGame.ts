import{ useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import {CanceledError} from 'axios'

export interface PlatForm{
  id:number
  name: string
  slug:string
}

export interface Game {
    id: number;
    metacritic: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: PlatForm}[]
  }
  
  interface GameFetchResult {
    count: number;
    results: Game[];
  }

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    const abort = new AbortController()
      setLoading(true)
      apiClient
        .get<GameFetchResult>("/games",{signal: abort.signal})
        .then((resp) => {
          setLoading(false)
          setGames(resp.data.results)})
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setLoading(false)
        });

    return () => abort.abort()
    }, []);

    return {games, error,isLoading}
}

export default useGame