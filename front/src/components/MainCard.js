import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { BasicButton } from "./BasicButton";
import { Header } from "./Header";
import { CustomTextField } from "./CustomTextField";
import { useState } from "react";
import { MealItems } from "./MealItems";
import { Spinner } from "./Spinner";
const Item = styled(Paper)(() => ({
  textAlign: "center",
  backgroundColor: "#077ae6",
  color: "#fff",
  lineHeight: "60px",
  marginTop: "5rem",
}));
export const MainCard = () => {
  const [mealItem, setMealItem] = useState("");
  const [mealQty, setMealQty] = useState(0);
  const [mealCals, setMealCals] = useState(0);
  const [mealProtein, setProtein] = useState(0);
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const saveMeal = () => {
    if (!mealItem || !mealQty || !mealCals || !mealProtein) {
      console.log("boo! bad input! X__X");
    } else {
      const totalCalories = (mealQty * mealCals) / 100;
      const totalProtein = (mealQty * mealProtein) / 100;
      const newMealItem = {
        mealItem,
        mealQty,
        mealCals: totalCalories,
        mealProtein: totalProtein,
      };
      const newMeals = [...mealItems, newMealItem];
      setMealItems(newMeals);
      setMealItem("");
      setMealQty(0);
      setMealCals(0);
      setProtein(0);

      fetch("http://localhost:4000/meals", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMealItem),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:4000/meals", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setMealItems(res);
      }, 2000);
  }, []);

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
                <BasicButton clickHandler={saveMeal} />
              </>
            )}
          </Item>
          <Item>
            <MealItems items={mealItems} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
