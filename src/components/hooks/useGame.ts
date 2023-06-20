import useData from './useData';
import { Genre } from './useGenre';
import { PlatForms } from './usePlatForm';

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
  

  export interface Props{
    selectedGenre: Genre | null;
    selectedPlatform: PlatForms | null;
  }

const useGame = (selectedGenre:Genre | null, selectedPlatform:  PlatForms | null) => 
useData<Game>("/games", {params: {genres:selectedGenre?.id,platforms:selectedPlatform?.id}},
[selectedGenre?.id, selectedPlatform?.id])

export default useGame