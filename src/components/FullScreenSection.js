import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, isBlinking, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      className={isBlinking ? "blinking-background" : "no-blinking-background"}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack 
        maxWidth="1280px" minHeight="100vh" 
        {...boxProps} 
        backgroundColor="transparent"
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
