import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function Item(props) {
  const { title, description, url, img, github } = props;

  const GitHubIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    );
  };

  const ExternalIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    );
  };

  return (
    <>
      <Flex padding="1.5rem">
        <Box
          alignItems="center"
          display="flex"
          borderRadius="5px"
          flexDirection="column"
          height="300px"
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
            fontSize="1.2rem"
            color="#fff"
          >
            {title}
          </Text>
          <Text as="p" color="grey.slate" fontSize=".9rem" fontWeight="600">
            {description}
          </Text>
          <Flex zIndex="2" position="relative" margin="0" width="100%">
            <a href={github} target="_blank" style={{ width: "1.5rem", marginRight:'1.5rem' }}>
              <GitHubIcon />
            </a>
            <a href={url} target="_blank" style={{ width: "1.5rem" }}>
              <ExternalIcon />
            </a>
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
