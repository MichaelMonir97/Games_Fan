import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForm, { PlatForms } from "./hooks/usePlatForm";

interface Props {
  onSelectPlatform: (Platform: PlatForms) => void;
  selectedPlatform: PlatForms | null;
}

const PlatFormSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatForm();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
