import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Alloavocat01 from "../assets/Alloavocat01.png";
import Alloavocat02 from "../assets/Alloavocat02.png";

export default function Alloavocat() {
  return (
    <Flex gap={6} p={10} bgColor="#00060A">
      <Flex gap={2} flexDirection="column" h="100vh" justifyContent="center" w="50%" flexGrow={1} position="sticky" top="0">
        <Text
          fontSize="16px"
          lineHeight="120%"
          bgGradient="linear(to-tr, #2AAC65, #C7FAF2)"
          bgClip="text"
          width="fit-content"
          textTransform="capitalize"
          fontWeight="black">
          ALLO AVOCAT
        </Text>
        <Text fontSize="38px" lineHeight="120%" color="white" fontWeight="bold">
        Get Legal Advice Anytime, Anywhere.Connect with nearby lawyers, schedule sessions, and get advice online. With this intuitive platform, you can get the legal help you need on your schedule, from the comfort of your own home.
        </Text>
      </Flex>
      <Flex gap={2} alignItems="center" flexDirection="column" flexGrow={1}>
        <Center h="100vh">
          <Image src={Alloavocat01} />
        </Center>
        <Center h="100vh">
          <Image src={Alloavocat02} />
        </Center>
      </Flex>
      
    </Flex>
  );
}
