import { Text } from "@chakra-ui/react";

type FormInvalidProps = {
  message?: string;
};
const FormInvalid = ({ message }: FormInvalidProps) => {
  return (
    <Text fontSize="13px" color="red" p="2">
      {message}
    </Text>
  );
};

export default FormInvalid;
