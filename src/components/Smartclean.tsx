import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Smartclean01 from "../assets/Smartclean01.png";
import Smartclean02 from "../assets/Smartclean02.png";
import Smartclean03 from "../assets/Smartclean03.png";

export default function Smartclean() {
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
          Smartclean
        </Text>
        <Text fontSize="38px" lineHeight="120%" color="white" fontWeight="bold">
        Revolutionizing Waste Management with SmartClean:  SaaS to help companies optimize their vehicle and employee management, streamline activities, and improve overall efficiency.
        </Text>
      </Flex>
      <Flex gap={2} alignItems="center" flexDirection="column" flexGrow={1}>
        <Center h="100vh">
          <Image src={Smartclean01} />
        </Center>
        <Center h="100vh">
          <Image src={Smartclean02} />
        </Center>
        <Center h="100vh">
          <Image src={Smartclean03} />
        </Center>
      </Flex>
      
    </Flex>
  );
}
