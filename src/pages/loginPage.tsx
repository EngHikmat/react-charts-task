import { Box, HStack, Text } from "@chakra-ui/react";
import IntroSide from "components/login/intro-side";

const LoginPage = () => {
  return (
    <Box h="100vh">
      <HStack h="100%" align="stretch" gap="0">
        <IntroSide />
        <Box flex="50%" p="5">
          <Text>SS</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default LoginPage;
