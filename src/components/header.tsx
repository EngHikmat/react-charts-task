import { Box, HStack, Text } from "@chakra-ui/react";
import { side_links } from "lib/constants/variables";
import { useLocation } from "react-router-dom";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "components/ui/menu";
import { CiLogout } from "react-icons/ci";
import { Avatar, AvatarGroup } from "./ui/avatar";
import { FaChevronDown } from "react-icons/fa";
import useAuthStore from "store/auth.store";

const Header = () => {
  const auth = useAuthStore();
  const location = useLocation();
  const getTitle = () => {
    return side_links.find((link) => link.url == location.pathname)?.name;
  };
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <HStack p="5" justifyContent="space-between">
      <Text fontSize="20px" fontWeight="600">
        {getTitle()}
      </Text>
      <MenuRoot>
        <MenuTrigger asChild>
          <HStack _hover={{ cursor: "pointer" }}>
            <AvatarGroup>
              <Avatar name="User" />
            </AvatarGroup>
            <Text>User</Text>
            <Box>
              <FaChevronDown size="10px" />
            </Box>
          </HStack>
        </MenuTrigger>
        <MenuContent p="0">
          <MenuItem
            value="new-txt-a"
            _hover={{ bg: "gray.300", cursor: "pointer" }}
            w="180px"
            p="3"
            onClick={() => handleLogout()}
          >
            <HStack color="red.500">
              <CiLogout />
              <Text> Logout</Text>
            </HStack>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </HStack>
  );
};

export default Header;
