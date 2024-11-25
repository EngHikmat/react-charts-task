import { Box, Input, Text } from "@chakra-ui/react";
import FormInvalid from "./form-invalid";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: string;
};

const FormField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
}: Props<T>) => (
  <Box>
    <Text pb="2" fontSize="15px">
      {label}
      <Text as="span" color="red">
        *
      </Text>
    </Text>
    <Input
      placeholder={`Enter ${label.toLowerCase()}`}
      h="60px"
      bg="gray.100"
      border={error ? "2px solid red" : "none"}
      outline="none"
      rounded="xl"
      {...register(name)}
      type={type}
    />
    {error && <FormInvalid message={error} />}
  </Box>
);

export default FormField;
