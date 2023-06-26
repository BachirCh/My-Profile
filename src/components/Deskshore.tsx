import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Deskshore01 from "../assets/Deskshore01.png";
import Deskshore02 from "../assets/Deskshore02.png";
import Deskshore03 from "../assets/Deskshore03.png";

export default function Deskshore() {
  return (
    <Flex gap={6} p={10} bgColor="#001624">
      <Flex gap={2} alignItems="center" flexDirection="column" flexGrow={1}>
        <Center h="100vh">
          <Image src={Deskshore01} />
        </Center>
        <Center h="100vh">
          <Image src={Deskshore02} />
        </Center>
        <Center h="100vh">
          <Image src={Deskshore03} />
        </Center>
      </Flex>
      <Flex gap={2} flexDirection="column" h="100vh" justifyContent="center" w="50%" flexGrow={1} position="sticky" top="0">
        <Text
          fontSize="16px"
          lineHeight="120%"
          bgGradient="linear(to-tr, #3483C7, #FAFDFF)"
          bgClip="text"
          width="fit-content"
          textTransform="capitalize"
          fontWeight="black">
          DESKSHORE
        </Text>
        <Text fontSize="38px" lineHeight="120%" color="white" fontWeight="bold">
          a financial management platform that helps companies streamline
          accounting tasks and improve financial decision-making.
        </Text>
      </Flex>
    </Flex>
  );
}
