import { Box } from "@chakra-ui/react";

type Props = {
  left: string;
  bottom: string;
};
const CircleDrop = ({ left, bottom }: Props) => {
  return (
    <Box
      bg="whiteAlpha.200"
      w="300px"
      h="300px"
      rounded="full"
      position="absolute"
      left={left}
      bottom={bottom}
    ></Box>
  );
};

export default CircleDrop;
