import { OrderedList, ListItem, Box, Button, Flex } from "@chakra-ui/react";

export default function Menu(props) {
  const { open, setOpen } = props;

  const Items = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" },
  ];

  const styleItem = {
    color: "#64ffda",
    textDecoration: "none",
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        minHeight="100vh"
        w="100%"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          p={["2rem", "6rem", "6rem", "8rem"]}
        >
          <OrderedList fontFamily="mono">
            {Items.map((item, index) => (
              <ListItem key={index} marginBottom="2rem" color="#ccd6f6">
                <a
                  href={item.href}
                  style={styleItem}
                  onClick={() => setOpen(!open)}
                >
                  {item.text}
                </a>
              </ListItem>
            ))}
          </OrderedList>
          <Button
            bg="transparent"
            border="1px solid #64ffda"
            padding=" 18px 50px"
            margin=" 10% auto 0px"
            _hover={{ bg: "rgba(100,255,218,0.1)", outline: "none" }}
            _active={{ bg: "rgba(100,255,218,0.1)", outline: "none" }}
          >
            <a
              href="https://drive.google.com/file/d/1A3_SgEC24I8mhrhBGOppWZtUESYrgGpN/view?usp=sharing"
              target="_blank"
              onClick={() => setOpen(!open)}
            >
              Resume
            </a>
          </Button>
        </Flex>
      </Box>
    </>
  );
}
