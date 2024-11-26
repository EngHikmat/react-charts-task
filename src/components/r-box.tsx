import React from "react";
import { Box, BoxProps, HStack, Text } from "@chakra-ui/react";

interface Props extends BoxProps {
  children: React.ReactNode;
  isBorder?: boolean;
  title?: string;
  full?: boolean;
  element?: React.ReactNode;
}

const Rbox = ({
  children,
  title,
  isBorder = true,
  full = false,
  element,
  ...rest
}: Props) => {
  return (
    <Box w="100%" rounded="12px" bg="white" {...rest}>
      {title && (
        <Box>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            p="24px"
            divideY={isBorder ? "1px solid #E2E5E9" : "none"}
          >
            <Text fontSize="18px" fontWeight="600">
              {title}
            </Text>
            {element}
          </HStack>

          {isBorder && <Box w="100%" bg="gray.100" h="1px"></Box>}
        </Box>
      )}
      <Box p={full ? "" : "24px"}>{children}</Box>
    </Box>
  );
};

export default Rbox;
