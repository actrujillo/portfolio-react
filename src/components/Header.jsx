import { Turn as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { Flex, Box } from "@chakra-ui/react";

export default function Header(props) {
  const { open, setOpen } = props;

  return (
    <Box
      w="60%"
      display="flex"
      position="fixed"
      right="0px"
      bg="#112240"
      zIndex="1"
    >
      <Flex
        position="absolute"
        left="160px"
        top="15px"
        onClick={() => setOpen(!open)}
      >
        <Hamburger></Hamburger>
      </Flex>
      {open && <Menu />}
    </Box>
  );
}
