import { Spinner, VStack } from "@chakra-ui/react";

interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "xs";
}

const Loader = ({ size = "lg" }: Props) => {
  return (
    <VStack>
      <Spinner size={size} color="primary.500" borderWidth="4px" />
    </VStack>
  );
};

export default Loader;
