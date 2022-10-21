import { Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";

export default function Footer() {
  const GitHubIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    );
  };

  const LinkedinIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-linkedin"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  };

  const TikTokIcon = () => {
    return (
      <svg
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        fill="#a8b2d1"
      >
        <path d="M224,80a52.059,52.059,0,0,1-52-52,4.0002,4.0002,0,0,0-4-4H128a4.0002,4.0002,0,0,0-4,4V156a24,24,0,1,1-34.28418-21.69238,3.99957,3.99957,0,0,0,2.28369-3.61279L92,89.05569a3.99948,3.99948,0,0,0-4.70117-3.938A72.00522,72.00522,0,1,0,172,156l-.00049-42.56348A99.27749,99.27749,0,0,0,224,128a4.0002,4.0002,0,0,0,4-4V84A4.0002,4.0002,0,0,0,224,80Zm-4,39.915a91.24721,91.24721,0,0,1-49.66455-17.1792,4.00019,4.00019,0,0,0-6.33594,3.24707L164,156A64,64,0,1,1,84,94.01223l-.00049,34.271A32.00156,32.00156,0,1,0,132,156V32h32.13184A60.09757,60.09757,0,0,0,220,87.86819Z" />
      </svg>
    );
  };

  const WhatsAppIcon = () => {
    return (
      <svg
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        fill="#a8b2d1"
      >
        <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z" />
      </svg>
    );
  };

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
        <ListItem>
          <a
            href="https://github.com/actrujillo"
            target="_blank"
            style={{ width: "1.5rem", marginRight: "1.5rem", color: "#a8b2d1" }}
          >
            <GitHubIcon />
          </a>
        </ListItem>
        <ListItem>
          {" "}
          <a
            href="https://www.tiktok.com/@arieltruji"
            target="_blank"
            style={{ width: "1.5rem", marginRight: "1.5rem" }}
          >
            <TikTokIcon />
          </a>
        </ListItem>
        <ListItem>
          {" "}
          <a
            href="https://api.whatsapp.com/send?phone=541159939383&text=Hello!"
            target="_blank"
            style={{ width: "1.5rem", marginRight: "1.5rem" }}
          >
            <WhatsAppIcon />
          </a>
        </ListItem>
        <ListItem color="#fff">
          {" "}
          <a
            href="https://www.linkedin.com/in/ariel-trujillo/"
            target="_blank"
            style={{ width: "1.5rem", marginRight: "1.5rem", color: "#a8b2d1" }}
          >
            <LinkedinIcon />
          </a>
        </ListItem>
      </UnorderedList>{" "}
      <Text as="h5" fontFamily="mono" fontSize={[".7rem",'.8rem','.9rem','1rem']}>
        Ariel Trujillo, 2022
      </Text>
    </Flex>
  );
}
