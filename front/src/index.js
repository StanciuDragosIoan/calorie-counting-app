import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { UIContextProvider } from "./state/UI.module";
import { UserContextProvider } from "./state/User.module";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UIContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);
