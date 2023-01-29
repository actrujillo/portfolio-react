import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Item(props) {
  const { title, description, url, img, github } = props;

  return (
    <>
      <Flex padding="1.5rem">
        <Box
          alignItems="center"
          display="flex"
          borderRadius="5px"
          flexDirection="column"
          height={["300px", "280px"]}
          width={["auto", "500px"]}
          justifyContent="space-around"
          overflow="hidden"
          position="relative"
          padding="1.5rem"
          zIndex="2"
          // css={{
          //   "&::before": {
          //     content: '""',
          //     position: "absolute",
          //     height: "40vh",
          //     backgroundImage: "url(https://i.ibb.co/KWTVV7J/google.png)",
          //     opacity:'0.25',
          //     zIndex:'4',
          //   },
          // }}
        >
          <Text
            as="h3"
            float="left"
            w="100%"
            fontWeight="bold"
            fontSize={["1.2rem", "1.4rem", "1.6rem"]}
            color="#fff"
          >
            {title}
          </Text>
          <Text
            as="p"
            color="grey.slate"
            fontSize={[".9rem", "1rem", "1.1rem"]}
            fontWeight="600"
          >
            {description}
          </Text>
          <Flex
            zIndex="2"
            position="relative"
            margin="0"
            width="100%"
            fontSize="1.5rem"
          >
            <Link
              href={github}
              target="_blank"
              w="1.5rem"
              marginRight="1.5rem"
              _hover={{ color: "hover" }}
            >
              <FiGithub />
            </Link>
            <Link
              href={url}
              target="_blank"
              w="1.5rem"
              marginRight="1.5rem"
              _hover={{ color: "hover" }}
            >
              <FiExternalLink />
            </Link>
          </Flex>
          <Image
            src={img}
            position="absolute"
            opacity="0.1"
            height="300px"
            objectFit="cover"
            objectPosition="center center"
            filter="invert(1%) sepia(100%) saturate(160%) hue-rotate(95deg) brightness(90%) contrast(100%)"
            transform="scale(1)"
            transition="0.6s ease-in-out"
            zIndex="0"
            _hover={{ transform: "scale(1.2)", opacity: "0.2" }}
          ></Image>
        </Box>
      </Flex>
    </>
  );
}
