import { Flex, Text, Button } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
    id="contact"
      p={["1.5rem", "3rem"]}
      minHeight="80vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        as="h2"
        color="grey.light"
        fontWeight="600"
        fontFamily="body"
        fontSize={["1.5rem", "2rem"]}
        m="1rem 0 1rem"
        textTransform="capitalize"
      >
        get in touch
      </Text>
      <Text
        as="p"
        color="grey.slate"
        mb="1rem"
        fontSize={["1rem",'1rem','1.2rem','1.4rem']}
        textAlign="center"
        w={['100%','80%']}
      >
        Currently, I'm looking for my first job as a developer, if you like my
        profile, please don't hesitate to contact me.
      </Text>
      <Button
        bg="navy"
        border="1px"
        borderColor="principal"
        color="principal"
        fontFamily="mono"
        fontWeight="200"
        marginTop="2rem"
        p="2rem"
        textTransform="capitalize"
        w={["50%", "50%", "30%", "20%"]}
        _hover={{ bg: "hover" }}
        _active={{ bg: "navy" }}
      >
        <a
          href="mailto:arielctrujillo@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          say hello
        </a>
      </Button>
    </Flex>
  );
}
