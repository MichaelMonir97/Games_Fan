import { Grid, GridItem } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import axios from "axios";
import GameGrid from "./components/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" " side main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"}>side</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
