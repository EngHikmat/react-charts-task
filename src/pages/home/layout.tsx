import { Box, HStack, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "components/sidebar";
import Header from "components/header";

const Layout = () => {
  return (
    <HStack align="stretch" height="100vh" gap="0">
      <SideBar />
      <VStack flex="1" align="stretch" gap="0">
        {/* Header Section */}
        <Header />

        {/* Main Content Section */}
        <Box flex="1" overflowY="auto" p="5" bg="#f9f9f9">
          <Outlet />
        </Box>
      </VStack>
    </HStack>
  );
};

export default Layout;
