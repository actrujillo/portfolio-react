import { Button, Heading, Flex } from "@chakra-ui/react";

export default function Principal() {
  return (
    <>
      <Flex
        h="100vh"
        w={["100%", "80%"]}
        flexDirection="column"
        justifyContent="center"
        p={["1.5rem", "3rem"]}
        marginLeft={["0", "2rem", "3rem", "12rem"]}
      >
        <Heading
          as="h2"
          fontWeight="500"
          size="md"
          fontFamily="mono"
          marginBottom={["1rem", "1.2rem", "1.8rem"]}
        >
          Hi, my name is
        </Heading>
        <Heading
          as="h1"
          fontFamily="body"
          size={["2xl", "3xl", "4xl", "4xl"]}
          color="grey.light"
          marginBottom={["1rem", "1.2rem", "1.8rem"]}
        >
          Ariel Trujillo.
        </Heading>

        <Heading
          as="h3"
          fontFamily="body"
          size={["xl", "xl", "2xl"]}
          color="grey"
          marginBottom={["3rem", "3rem", "4rem"]}
        >
          FrontEnd Developer.
        </Heading>
        <Button
          bg="navy"
          border="1px"
          borderColor="principal"
          color="principal"
          fontFamily="mono"
          fontWeight="200"
          p="2rem"
          w={["65%", "50%", "50%", "30%"]}
          _hover={{ bg: "hover" }}
          _active={{ bg: "navy" }}
        >
          <a href="https://www.linkedin.com/in/ariel-trujillo/" target="_blank">
            Check my LinkedIn
          </a>
        </Button>
      </Flex>
    </>
  );
}
