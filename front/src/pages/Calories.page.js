import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Navigation } from "../components/Navigation/Navigation";
import { MainCard } from "../components/MainCard/MainCard";
import { LoginForm } from "../components/LoginForm";

import { UserContext } from "../state/User.module";

import { MealItemsContext, MealItemsProvider } from "../state/MealItems.module";
 

/*
 * @Calories Page (contents of the page)
 *
 */

export const CaloriesPage = () => {
  const { token } = useContext(UserContext); 
   
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
        {token ? (
          <MealItemsProvider>
            <MainCard />
          </MealItemsProvider>
        ) : (
          <>
            <br />
            <LoginForm />
          </>
        )}
      </div>
    </Box>
  );
};
