import { Grid, GridItem } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" " side main"`,
      }}
    >
      <GridItem bgColor={"red"} area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bgColor={"blue"} area={"side"}>
          side
        </GridItem>
      </Show>
      <GridItem bgColor={"black"} area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
