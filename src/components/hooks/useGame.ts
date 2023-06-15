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
  


const useGame = () => useData<Game>("/games")

export default useGame