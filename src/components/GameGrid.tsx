import { SimpleGrid } from "@chakra-ui/react";
import useGame from "./hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
