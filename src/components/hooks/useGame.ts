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
  
    useEffect(() => {
    const abort = new AbortController()
      apiClient
        .get<GameFetchResult>("/games",{signal: abort.signal})
        .then((resp) => setGames(resp.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
        });

    return () => abort.abort()
    }, []);

    return {games, error}
}

export default useGame