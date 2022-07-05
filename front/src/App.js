import React, { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { MealItemsProvider } from "./state/MealItems.module";
import { UIContext } from "./state/UI.module";

import { MainCard } from "./components/MainCard/MainCard";
import { ToggleSwitch } from "./components/ToggleSwitch/ToggleSwitch";
import { getTheme } from "./theme/Theme";
import { Box } from "@mui/material";

function App() {
  const { mode } = useContext(UIContext);

  const theme = getTheme({ mode });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.defaultColor",
          p: 0,
          m: -1,
        }}
      >
        <ToggleSwitch />
        <div className="App">
          <MealItemsProvider>
            <MainCard />
          </MealItemsProvider>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
