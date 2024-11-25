import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, createSystem } from "@chakra-ui/react";

// Routes
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

import themeConfig from "../theme";

const system = createSystem(themeConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
);
