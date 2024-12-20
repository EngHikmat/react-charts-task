import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import IntroSide from "components/login/intro-side";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "lib/schemas/login.schema";
import { LoginType } from "lib/types/login.types";
import FormField from "components/form-field";
import useAuthStore from "store/auth.store";
import { Toaster, toaster } from "components/ui/toaster";

const LoginPage = () => {
  const auth = useAuthStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginType) => {
    if (data.username === "user" && data.password === "password") {
      auth.login(data);
    } else {
      toaster.create({
        title: "Ops!",
        description:
          "Your login attempt was unsuccessful. Please double-check your credentials and try again.",
        type: "error",
        duration: 3000,
      });
    }
  };
  return (
    <Box h="100vh">
      <Toaster />
      <HStack h="100%" align="stretch" gap="0">
        <IntroSide />
        <Box flex="50%" p="5">
          <VStack align="center" justify="center" w="100%" h="100%" gap="5">
            <Box w="70%">
              <FormField
                label="Username"
                name="username"
                register={register}
                error={errors.username?.message}
              />
            </Box>
            <Box w="70%">
              <FormField
                label="Password"
                name="password"
                type="password"
                register={register}
                error={errors.password?.message}
              />
            </Box>
            <Button
              mt="2"
              bg="primary.500"
              _hover={{ bg: "primary.600" }}
              rounded="full"
              px="50px"
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default LoginPage;
