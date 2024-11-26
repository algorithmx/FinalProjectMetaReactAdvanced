import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack padding={4} spacing={4} align="start" color="black" backgroundColor="white" borderRadius="lg">
      <Image src={imageSrc} alt={title} />
      <Heading as="h2" size="2xl">{title}</Heading>
      <Text size="2x">{description}</Text>
      <HStack>
          <Text size="2x" onClick={() => alert(`Learn more about ${title}`)}>Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
    </VStack>
  );
};

export default Card;
