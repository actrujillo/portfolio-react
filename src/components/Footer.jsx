import { Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const Social = [
    { href: "https://www.tiktok.com/@arieltruji", icon: <FaTiktok /> },
    { href: "https://github.com/actrujillo", icon: <FiGithub /> },
    { href: "https://api.whatsapp.com/send?phone=541159939383&text=Hello!", icon: <FaWhatsapp /> },
    { href: "https://www.linkedin.com/in/ariel-trujillo/", icon: <FaLinkedinIn /> },
  ];

  return (
    <Flex
      p="1.5rem"
      maxHeight="20vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <UnorderedList
        listStyleType="none"
        h="24px"
        w="60%"
        margin="20px 0"
        display="flex"
        justifyContent="space-around"
      >
        {Social.map((item, index) => (
          <ListItem key={index} fontSize={["1rem", ".8rem", ".9rem", "1.3rem"]}>
            <a
              href={item.href}
              target="_blank"
              style={{
                width: "1.5rem",
                marginRight: "1.5rem",
                color: "#a8b2d1",
              }}
            >
              {item.icon}
            </a>
          </ListItem>
        ))}
      </UnorderedList>
      <Text
        as="h5"
        fontFamily="mono"
        fontSize={[".7rem", ".8rem", ".9rem", "1rem"]}
      >
        Ariel Trujillo
      </Text>
    </Flex>
  );
}
