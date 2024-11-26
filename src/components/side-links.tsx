import { HStack, Text, VStack } from "@chakra-ui/react";
import { side_links } from "lib/constants/variables";
import { Link, useLocation } from "react-router-dom";

const SideLinks = () => {
  const location = useLocation();

  const getLinkStyles = (index: number, url: string) => {
    const isActive =
      (index === 0 && location.pathname === url) ||
      (location.pathname.includes(url) && url !== "" && index > 0);

    return {
      background: isActive ? "primary.500" : "none",
      color: isActive ? "white" : "black",
      transition: "all 0.3s",
    };
  };

  return (
    <VStack align="stretch" mt="24px" gap="6px">
      {side_links.map((link, index) => (
        <Link key={index} to={link.url}>
          <HStack
            cursor="pointer"
            p="10px"
            rounded="8px"
            fontSize="14px"
            fontWeight="500"
            {...getLinkStyles(index, link.url)}
            _hover={{
              background: "primary.500",
              color: "white",
            }}
            transition="all 0.2s"
          >
            <Text>{link.icon({ size: 20 })}</Text>
            <Text>{link.name}</Text>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
};

export default SideLinks;
