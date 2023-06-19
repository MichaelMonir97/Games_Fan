import { HStack, Image, List, ListItem, Button, Link } from "@chakra-ui/react";
import useGenre, { Genre } from "./hooks/useGenre";
import croppingImage from "./Image-url";
import GenresSkeleton from "./GenresSkeleton";
import useGame from "./hooks/useGame";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const Genres = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { setData } = useGame();
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
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                noOfLines={2}
                textAlign="left"
                wordBreak="break-all"
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
