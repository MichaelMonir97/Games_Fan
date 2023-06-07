import PlatFormList from "./PlatFormList";
import { Game } from "./hooks/useGame";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={15}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormList
          plateform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
