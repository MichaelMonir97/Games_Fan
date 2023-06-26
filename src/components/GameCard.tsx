import CriticScore from "./CriticScore";
import croppingImage from "./Image-url";
import PlatFormList from "./PlatFormList";
import { Game } from "./hooks/useGame";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Image src={croppingImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl" marginBottom={2}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormList
            plateform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
