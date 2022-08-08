import React from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Navigation } from "../components/Navigation/Navigation";
import { MainCard } from "../components/MainCard/MainCard";

import { MealItemsProvider } from "../state/MealItems.module";

/*
 * @Calories Page (contents of the page)
 *
 */

export const CaloriesPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.defaultColor",
        p: 0,
        m: -1,
        height: "auto",
      }}
    >
      <div className="App">
        <Navigation />
        <MealItemsProvider>
          <MainCard />
        </MealItemsProvider>
      </div>
    </Box>
  );
};
