import { Box, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import bachir from "../assets/bachir.png";

export default function Hero() {
  return (
    <Box w="100%" bgColor="#010B14">
      <Flex p={10} gap={6}>
        <Image src={logo} alt="" />
        <Spacer />
        <Link
          fontSize="18px"
          color="whiteAlpha.800"
          _hover={{ color: "white", fontWeight: 500 }}>
          Projects
        </Link>
        <Link
          fontSize="18px"
          color="whiteAlpha.800"
          _hover={{ color: "white", fontWeight: 500 }}>
          Contact
        </Link>
      </Flex>
      <Flex p={10} gap={6} alignItems="center">
        <Box flexGrow={1}>
          <Image src={bachir} flexGrow={1} alt="" />
        </Box>
        <Box flexGrow={1}>
          <Text
            fontSize="70px"
            letterSpacing="-1%"
            lineHeight="120%"
            color="white"
            fontWeight="bold">
            Designing experiences that solve problems
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
