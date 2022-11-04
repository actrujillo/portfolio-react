import { Flex, Text } from "@chakra-ui/react";
import projects from "../data/projects.json";
import Item from "./Item";

export default function Projects() {
  // const items = projects.map((item) => item);

  return (
    <>
      <Flex
        id="projects"
        wrap="wrap"
        flexDirection="column"
        p={["1.5rem", "3rem"]}
        minHeight="100vh"
      >
        <Text
          as="h2"
          color="grey.light"
          fontWeight="600"
          fontFamily="body"
          fontSize={["1.5rem", "2rem"]}
          m="1rem 0 1rem"
        >
          Projects
        </Text>
        <Flex
          maxWidth="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {projects.map((project) => (
            <Item {...project} key={project.id} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
