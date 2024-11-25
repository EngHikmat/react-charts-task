import { defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        primary: {
          100: { value: "#00ffc7" },
          200: { value: "#02f2bd" },
          300: { value: "#05eab7" },
          400: { value: "#04d8a9" },
          500: { value: "#01C095" },
          600: { value: "#00a781" },
        },
      },
    },
  },
});

const mconfig = mergeConfigs(defaultConfig, config);
export default mconfig;
