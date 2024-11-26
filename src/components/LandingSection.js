import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Jimmy Hua!";
const bio1 = "A blinking frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      <VStack spacing={8}>
        <Avatar src="https://avatars.githubusercontent.com/u/123456789?v=4" size="2xl" />
        <Heading as="h1" size="1xl" color="white">
          {greeting}
        </Heading>
        <Heading as="h2" size="2xl" color="white" className="blinking-background">
          {bio1}
        </Heading>
        <Heading as="h2" size="2xl" color="white">
          {bio2}
        </Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;
