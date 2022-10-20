import {
  OrderedList,
  ListItem,
  Box,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        minHeight="100vh"
        w="100%"
      >
        <Flex flexDirection="column" alignItems="center" p="2rem">
          <OrderedList fontFamily="mono">
            <ListItem marginBottom="2rem">
              <Link
                to="/"
                color="#ccd6f6"
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </ListItem>
            <ListItem color="#ccd6f6" marginBottom="2rem">
              Projects
            </ListItem>
            <ListItem color="#ccd6f6" marginBottom="2rem">
              Skills
            </ListItem>
            <ListItem color="#ccd6f6" marginBottom="2rem">
              Contact
            </ListItem>
          </OrderedList>
          <Button
            bg="transparent"
            border="1px solid #64ffda"
            padding=" 18px 50px"
            margin=" 10% auto 0px"
            _hover={{ bg: "rgba(100,255,218,0.1)", outline: "none" }}
            _active={{ bg: "rgba(100,255,218,0.1)", outline: "none" }}
          >
            Resume
          </Button>
        </Flex>
      </Box>
    </>
  );
}
