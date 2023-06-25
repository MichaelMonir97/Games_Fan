import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <HStack padding={"0 10px"}>
      <Image src={logo} boxSize={"60px"} />
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
