import { Box, Text, VStack } from "@chakra-ui/react";
import CircleDrop from "./circle-drop";
import { FaChartPie } from "react-icons/fa";

const IntroSide = () => {
  return (
    <Box
      bg="primary.500"
      flex="30%"
      p="5"
      position="relative"
      overflow="hidden"
      color="white"
      textAlign="center"
    >
      <FaChartPie size="40px" />
      <VStack align="center" py="100px">
        <Text fontSize="35px" fontWeight="600">
          React Charts Task
        </Text>
        <Text fontSize="30px" fontWeight="400" pt="5">
          Login
        </Text>
        <Text fontSize="15px" w="450px" color="whiteAlpha.800" fontWeight="400">
          To view this page, please ensure you are logged into your account.
          Access is restricted to authorized users only.
        </Text>
      </VStack>
      <CircleDrop left="-50px" bottom="-50px" />
      <CircleDrop left="100px" bottom="-50px" />
      <CircleDrop left="200px" bottom="-50px" />
      <CircleDrop left="350px" bottom="-50px" />
    </Box>
  );
};

export default IntroSide;
