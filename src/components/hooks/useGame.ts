import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import {CanceledError} from 'axios'

interface Game {
    id: number;
    name: string;
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