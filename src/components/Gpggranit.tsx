import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Gpggranit01 from "../assets/Gpggranit01.png";
import Gpggranit02 from "../assets/Gpggranit02.png";
import Gpggranit03 from "../assets/Gpggranit03.png";

export default function Gpggranit() {
  return (
    <Flex gap={6} p={10} bgColor="#001624">
      <Flex gap={2} alignItems="center" flexDirection="column" flexGrow={1}>
        <Center h="100vh">
          <Image src={Gpggranit01} />
        </Center>
        <Center h="100vh">
          <Image src={Gpggranit02} />
        </Center>
        <Center h="100vh">
          <Image src={Gpggranit03} />
        </Center>
      </Flex>
      <Flex gap={2} flexDirection="column" h="100vh" justifyContent="center" w="50%" flexGrow={1} position="sticky" top="0">
        <Text
          fontSize="16px"
          lineHeight="120%"
          bgGradient="linear(to-tr, #808080, #E5E5E5)"
          bgClip="text"
          width="fit-content"
          textTransform="capitalize"
          fontWeight="black">
          GPG GRANIT
        </Text>
        <Text fontSize="38px" lineHeight="120%" color="white" fontWeight="bold">
        Providing an easier way to find the perfect monument for your loved ones. Explore the GPG Granit marketplace, where both businesses and individuals can browse a wide range of funerary monuments with ease.
        </Text>
      </Flex>
    </Flex>
  );
}
