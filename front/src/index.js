import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { UIContextProvider } from "./state/UI.module";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>
);
