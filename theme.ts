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
        primary: { value: "#01C095" },
      },
      fonts: {
        body: { value: "'GE SS Two Light', sans-serif" },
        heading: { value: "'GE SS Two Light', sans-serif" },
      },
    },
  },
});

const mconfig = mergeConfigs(defaultConfig, config);
export default mconfig;
