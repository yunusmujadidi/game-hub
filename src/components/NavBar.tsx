import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="80px" src={logo} />
      <Text fontSize="xl">NavBasdasdasdasd</Text>
    </HStack>
  );
};

export default NavBar;
