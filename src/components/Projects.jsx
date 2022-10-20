import { Flex, Text } from "@chakra-ui/react";
import projects from "../data/projects.json";
import Item from "./Item";

export default function Projects() {
  // const items = projects.map((item) => item);

  return (
    <>
      <Flex wrap="wrap" p="1.5rem" minHeight="100vh">
        <Text
          as="h2"
          color="grey.light"
          fontWeight="600"
          fontFamily="body"
          fontSize="1.5rem"
          m="1rem 0 1rem"
        >
          Projects
        </Text>
        {projects.map((project) => (
          <Item {...project} key={project.id} />
        ))}
      </Flex>
    </>
  );
}
