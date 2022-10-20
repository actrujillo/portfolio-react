import { Box } from "@chakra-ui/react";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Box w="100%" minHeight="100vh" backgroundColor="#0a192f" color="#64ffda" >
        {children}
      </Box>
    </>
  );
}
