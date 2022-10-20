import { Button, Heading, Flex } from "@chakra-ui/react";

export default function Principal() {
  return (
    <>
      <Flex
        h="100vh"
        w="100%"
        flexDirection="column"
        justifyContent="center"
        p="1.5rem"
      >
        <Heading
          as="h2"
          fontWeight="500"
          size="md"
          fontFamily="mono"
          marginBottom="1rem"
        >
          Hi, my name is
        </Heading>
        <Heading
          as="h1"
          fontFamily="body"
          size="2xl"
          color="grey.light"
          marginBottom="1rem"
        >
          Ariel Trujillo.
        </Heading>

        <Heading
          as="h3"
          fontFamily="body"
          size="xl"
          color="grey"
          marginBottom="3rem"
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
          w="70%"
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
