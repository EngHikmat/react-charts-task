import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, createSystem } from "@chakra-ui/react";

// Routes
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

import themeConfig from "../theme";

const system = createSystem(themeConfig);

// Rect Query Configuration
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: 24 * 60 * 60 * 1000,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
