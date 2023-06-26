import { Center, Flex, Text } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import LinkedinIcon from "../assets/Linkedin.tsx";

export default function Smartclean() {
  return (
    <Center gap={6} p={10} bgColor="#001625" flexDirection="column">
      <Text
        fontSize="88px"
        lineHeight="120%"
        letterSpacing="-1%"
        color="white"
        fontWeight="bold">
        Let's Connect
      </Text>
      <Text
        fontSize="44px"
        lineHeight="120%"
        color="whiteAlpha.900"
        fontWeight="bold">
        Feel free to reach out to me
      </Text>
      <Flex flexDirection="column" gap={4} alignItems="center" w="500px">
        <Flex gap={2} alignItems="center"  w="100%">
          <EmailIcon boxSize={8} color="white" />
          <Text
            fontSize="32px"
            lineHeight="120%"
            color="whiteAlpha.800"
            flexGrow="1"
            textAlign="center">
            cherratbachir@gmail.com
          </Text>
        </Flex>
        <Flex gap={2} alignItems="center" w="100%">
          <PhoneIcon boxSize={8} color="white" />
          <Text fontSize="32px" lineHeight="120%" color="whiteAlpha.800" flexGrow="1" textAlign="center">
            (+212) 65411-5866
          </Text>
        </Flex>
        <Flex gap={2} alignItems="center" w="100%">
          <LinkedinIcon/>
          <PhoneIcon boxSize={8} color="white" />
          <Text fontSize="32px" lineHeight="120%" color="whiteAlpha.800" flexGrow="1" textAlign="center">
            (+212) 65411-5866
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
}
