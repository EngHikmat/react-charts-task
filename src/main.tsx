import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "components/ui/provider";

// Routes
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
