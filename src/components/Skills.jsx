import { Image, Flex, Text } from "@chakra-ui/react";

export default function Skills() {
  const images = [
    "https://i.ibb.co/z4nrJdX/html.png",
    "https://i.ibb.co/VHJ7X1n/css.png",
    "https://i.ibb.co/X8CPzhw/javascript.png",
    "https://i.ibb.co/BVy1y0s/react.png",
    "https://i.ibb.co/R0N5Hcc/bootstrap.png",
    "https://i.ibb.co/9WTfLPy/chakra.png",
    "https://i.ibb.co/2s5T1DP/github.png",
    "https://i.ibb.co/6wYbTvW/styled.png",
  ];

  return (
    <>
      <Flex
        p={["1.5rem", "3rem"]}
        minHeight={["100vh", "50vh"]}
        justifyContent="space-around"
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
          Skills
        </Text>
        <Flex maxWidth="100%" flexWrap="wrap" justifyContent="center" h="100%">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="skills"
              w={["30%", "30%", "15%", "10%"]}
              m=".5rem"
              p=".5rem"
              borderRadius="1rem"
              filter="invert(1%) sepia(100%) saturate(160%) hue-rotate(95deg) brightness(90%) contrast(100%)"
              _hover={{ transition: ".3s", filter: "none" }}
            ></Image>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
