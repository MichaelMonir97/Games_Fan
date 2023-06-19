import useData from './useData';
import { Genre } from './useGenre';

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
  


const useGame = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres:selectedGenre?.id}},[selectedGenre?.id])

export default useGame