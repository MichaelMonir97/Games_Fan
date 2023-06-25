import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenre";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForms } from "./components/hooks/usePlatForm";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatForms | null;
  sort: string;
  search: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" " side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onEnter={(search) => setGameQuery({ ...GameQuery, search })} />
      </GridItem>

      <Show above="lg">
        <GridItem area={"side"} paddingX={5}>
          <Genres
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            selectedGenre={GameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatFormSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
            selectedPlatform={GameQuery.platform}
          />
          <SortSelector
            onSelectSort={(sort) => setGameQuery({ ...GameQuery, sort })}
            selectedSort={GameQuery.sort}
          />
        </HStack>
        <GameGrid GameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
