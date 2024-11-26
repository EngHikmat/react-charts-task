import { Box, Text, VStack } from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";
import SideLinks from "./side-links";

const SideBar = () => {
  return (
    <Box bg="white" px="5" py="10" w="250px">
      <VStack align="stretch">
        <VStack align="center">
          <FaChartPie size="30px" />
          <Text fontWeight="600">React Charts Task</Text>
        </VStack>

        <SideLinks />
      </VStack>
    </Box>
  );
};

export default SideBar;
