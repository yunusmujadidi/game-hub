import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { SearchInputProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
