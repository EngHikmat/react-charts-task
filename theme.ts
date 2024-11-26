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
          100: { value: "#42a4ff" },
          200: { value: "#007cf0" },
          300: { value: "#0076e5" },
          400: { value: "#006dd3" },
          500: { value: "#0062bf" },
          600: { value: "#005aaf" },
        },
        secondary: {
          300: { value: "#fafafa" },
        },
      },
    },
  },
});

const mconfig = mergeConfigs(defaultConfig, config);
export default mconfig;
