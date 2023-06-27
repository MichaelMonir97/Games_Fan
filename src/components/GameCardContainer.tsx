import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={15}
      boxShadow="0px 0px 5px 5px rgba(0, 0, 0, 0.1)"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
