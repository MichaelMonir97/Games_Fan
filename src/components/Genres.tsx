import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import croppingImage from "./Image-url";

const Genres = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppingImage(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
