import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import theme from "../themes/theme"

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Layout>
      </ChakraProvider>
    </>
  );
}
