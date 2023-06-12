import { SimpleGrid } from "@chakra-ui/react";
import useGame from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const SkeletonArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {isLoading && SkeletonArray.map((s) => <GameCardSkeleton />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
