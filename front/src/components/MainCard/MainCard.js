import React, { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { MealItemsContext } from "../../state/MealItems.module";
import { BasicButton } from "../BasicButton";
import { Header } from "../Header";
import { CustomTextField } from "../CustomTextField/CustomTextField";

import { MealItems } from "../MealItems";
import { Spinner } from "../Spinner";
import { Item } from "./Item";

/*
 * @MainCard (functional component - container
 * component holds all state and children components)
 *
 * @returns container component gets data injected from MealsService
 */

export const MainCard = () => {
  const {
    isLoading,
    idToEdit,
    deleteMeals,
    mealItem,
    setMealItem,
    mealQty,
    setMealQty,
    mealProtein,
    setProtein,
    mealCals,
    setMealCals,
    saveEditMeal,
    cancelEdit,
    saveMeal
  } = useContext(MealItemsContext);
  
 
  return (
    <Box>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Item>
            <Header />
            {isLoading && <Spinner />}
            {!isLoading && (
              <>
                <CustomTextField
                  id="mealItem"
                  placeholder="Meal Item"
                  changeHandler={(e) => setMealItem(e.target.value)}
                  value={mealItem}
                />
                <CustomTextField
                  id="mealQuantity"
                  type="number"
                  placeholder="Meal Quantity"
                  changeHandler={(e) => setMealQty(e.target.value)}
                  value={mealQty}
                />

                <CustomTextField
                  id="mealCalories"
                  placeholder="Meal Calories/100g"
                  type="number"
                  changeHandler={(e) => setMealCals(e.target.value)}
                  value={mealCals}
                />

                <CustomTextField
                  id="mealProtein"
                  placeholder="Meal Protein/100g"
                  type="number"
                  changeHandler={(e) => setProtein(e.target.value)}
                  value={mealProtein}
                />
                {!idToEdit && <BasicButton clickHandler={saveMeal} />}
                <BasicButton
                  color="error"
                  caption="Clear All"
                  clickHandler={deleteMeals}
                />
                {idToEdit && (
                  <>
                    <BasicButton
                      color="success"
                      caption="Save Edit"
                      clickHandler={saveEditMeal}
                    />
                    <BasicButton
                      color="secondary"
                      caption="Cancel"
                      clickHandler={cancelEdit}
                    />
                  </>
                )}
              </>
            )}
          </Item>
          <Item>
            <MealItems />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
