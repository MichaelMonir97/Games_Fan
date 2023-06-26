import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "./hooks/useGenre";
import croppingImage from "./Image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const Genres = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {isLoading && skeltons.map((sk) => <GenresSkeleton key={sk} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={croppingImage(genre.image_background)}
                objectFit="cover"
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                textAlign="left"
                whiteSpace="normal"
                fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
