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
import { useRef } from "react";

interface Props {
  onEnter: (value: string) => void;
}

const NavBar = ({ onEnter }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <HStack padding={"0 10px"}>
      <Image src={logo} boxSize={"60px"} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ref.current && onEnter(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement>
            <BsSearch />
          </InputLeftElement>
          <Input
            placeholder="Search games..."
            borderRadius={20}
            variant="filled"
            ref={ref}
          />
        </InputGroup>
      </form>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
