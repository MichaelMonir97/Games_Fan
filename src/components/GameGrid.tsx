import { SimpleGrid } from "@chakra-ui/react";
import useGame from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGenre";
import { PlatForms } from "./hooks/usePlatForm";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: PlatForms | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre, selectedPlatform);
  const SkeletonArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="10px">
        {isLoading &&
          SkeletonArray.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
