import { GameQuery } from '../../App';
import useData from './useData';


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
  



const useGame = (gameQuery:GameQuery) => 
useData<Game>("/games", {params: 
  {
    genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id,
    ordering:gameQuery.sort,
    search:gameQuery.search
  }},
[gameQuery])

export default useGame