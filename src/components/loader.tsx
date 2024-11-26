import { VStack } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "components/ui/progress-circle";

interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "xs";
}

const Loader = ({ size = "md" }: Props) => {
  return (
    <VStack>
      <ProgressCircleRoot size={size} value={30} colorPalette={["blue"]}>
        <ProgressCircleRing cap="round" />
      </ProgressCircleRoot>
    </VStack>
  );
};

export default Loader;
