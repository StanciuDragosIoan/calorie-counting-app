import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { BasicButton } from "../BasicButton";
import { Header } from "../Header";
import { CustomTextField } from "../CustomTextField/CustomTextField";
import { useState } from "react";
import { MealItems } from "../MealItems";
import { Spinner } from "../Spinner";
import { postData, getData } from "../../services/http";
import { Item } from "./Item";
export const MainCard = () => {
  const [mealItem, setMealItem] = useState("");
  const [mealQty, setMealQty] = useState(0);
  const [mealCals, setMealCals] = useState(0);
  const [mealProtein, setProtein] = useState(0);
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idToEdit, setId] = useState(null);

  const processMealInput = () => {
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
      clearInput();
      return newMealItem;
    }
  };

  const saveMeal = async () => {
    const newMealItem = processMealInput();
    if (newMealItem) {
      const resData = await postData(
        "http://localhost:4000/meals",
        newMealItem
      );
      console.log(resData);
      await fetchItems();
    }
  };

  const deleteMeals = async () => {
    setIsLoading(true);
    const resData = await postData("http://localhost:4000/meals/clearAll");
    console.log(resData);
    setIsLoading(false);
    setMealItems([]);
    clearInput();
  };

  const deleteItem = async (id) => {
    setIsLoading(true);
    const resData = await postData(`http://localhost:4000/meals/${id}`);
    console.log(resData);
    setIsLoading(false);
    await fetchItems();
  };

  const editItem = (itemToEdit) => {
    const { _id, mealItem, mealQty, mealCals, mealProtein } = itemToEdit;
    setMealItem(mealItem);
    setMealQty(mealQty);
    setMealCals(mealCals);
    setProtein(mealProtein);
    setId(_id);
  };

  const saveEditMeal = async () => {
    const editItem = processMealInput();
    editItem.idToEdit = idToEdit;
    const resData = await postData("http://localhost:4000/edit/meal", editItem);
    await fetchItems();
    console.log(resData);
    setId(null);
  };

  const fetchItems = async () => {
    setIsLoading(true);
    const items = await getData("http://localhost:4000/meals");
    setMealItems(items);
    setIsLoading(false);
  };

  const clearInput = () => {
    setMealItem("");
    setMealQty(0);
    setMealCals(0);
    setProtein(0);
  };

  const cancelEdit = () => {
    setId(null);
    clearInput();
  };

  useEffect(() => {
    fetchItems();
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
            <MealItems
              items={mealItems}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
