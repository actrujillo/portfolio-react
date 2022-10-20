import Intro from "../components/Intro";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Principal from "../components/Principal";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const basicBoxStyles = {
    w: "100%",
    minHeight: "100vh",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* {loading ? (
        <Intro />
      ) : (
        <>
          <Header />
          <h1>Hola mundo</h1>
        </>
      )} */}
      <Header open={open} setOpen={setOpen}></Header>
      {!open ? (
        <Box sx={basicBoxStyles}>
          <Principal />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Box>
      ) : (
        <Box sx={basicBoxStyles} filter="auto" blur="4px">
          <Principal />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Box>
      )}
    </>
  );
}
