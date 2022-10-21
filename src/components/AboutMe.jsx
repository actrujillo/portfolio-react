import { Box, Text, Image, Flex } from "@chakra-ui/react";
import imgMe from "../assets/statics/me.png";

export default function AboutMe() {
  return (
    <>
      <Box
        p={["1.5rem", "3rem"]}
        minHeight="100vh"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
      >
        <Text
          as="h2"
          color="grey.light"
          fontWeight="600"
          fontFamily="body"
          fontSize={["1.5rem", "2rem"]}
          m="1rem 0 1rem"
        >
          About Me
        </Text>
        <Flex flexDirection="column" alignItems="center">
          <Text
            as="p"
            color="grey.slate"
            mb="1rem"
            fontSize={["1rem", "1.25rem"]}
          >
            <Text as="span" color="green" fontWeight="bold">
              Hello World!{" "}
            </Text>
            I'm Ariel, a programmer seeking a position as a FrontEnd Developer
            to continue my learning and development.
          </Text>
          <Text
            as="p"
            color="grey.slate"
            mb="1rem"
            fontSize={["1rem", "1.25rem"]}
          >
            Every day, I try to learn or develop something new: from
            <Text as="span" color="green" fontWeight="bold">
              {" "}
              improving my English
            </Text>{" "}
            to creating projects for my portfolio.
          </Text>
          <Text
            as="p"
            color="grey.slate"
            mb="1rem"
            fontSize={["1rem", "1.25rem"]}
          >
            Additionally, I organize my days in a way that allows me to dedicate
            time to personal care, in order to have peace of mind as well as
            ideas to implement.
          </Text>
          <Text
            as="p"
            color="grey.slate"
            mb="1rem"
            fontSize={["1rem", "1.25rem"]}
          >
            My social skills complement those of the people around me, and{" "}
            <Text as="span" color="green" fontWeight="bold">
              I promote inclusion
            </Text>{" "}
            to have a warm environment conducive to achieving better results.
          </Text>
        </Flex>

        <Flex justifyContent="center" w="100%">
          <Image
            src={imgMe}
            alt="me"
            border="1px solid none"
            borderRadius="5px"
            boxSize={["200px", "300px"]}
            boxShadow="8px 8px 2px 1px"
            m="2rem"
            filter="invert(1%) sepia(100%) saturate(160%) hue-rotate(95deg) brightness(90%) contrast(100%)"
            transition="all .2s"
            _hover={{
              boxShadow: "-8px 8px 2px -1px",
              filter: "none",
            }}
          ></Image>
        </Flex>
      </Box>
    </>
  );
}
