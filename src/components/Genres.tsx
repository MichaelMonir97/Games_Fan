import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import croppingImage from "./Image-url";
import GenresSkeleton from "./GenresSkeleton";

const Genres = () => {
  const { data, isLoading, error } = useGenre();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return null;
  return (
    <>
      <List>
        {isLoading && skeltons.map((sk) => <GenresSkeleton key={sk} />)}
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
    </>
  );
};

export default Genres;
