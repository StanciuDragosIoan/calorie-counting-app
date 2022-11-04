import React, { createContext, useEffect, useState, useContext } from "react";

import { getData, postData } from "./http";

export const MealItemsContext = createContext();

/*
 * Service for handling MealItems globally thoroughout our app
 */

export const MealItemsProvider = ({ children }) => {
  //state
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mealItem, setMealItem] = useState("");
  const [mealQty, setMealQty] = useState(0);
  const [mealCals, setMealCals] = useState(0);
  const [mealProtein, setProtein] = useState(0);
  const [idToEdit, setId] = useState(null);

  const fetchItems = async () => {
    setIsLoading(true);
    const items = await getData("http://localhost:4000/meals");
    setIsLoading(false);
    setMeals(items);
  };

  const deleteItem = async (id) => {
    setIsLoading(true);
    await postData(`http://localhost:4000/meals/${id}`);
    setIsLoading(false);
    await fetchItems();
  };

  const deleteMeals = async () => {
    setIsLoading(true);
    await postData("http://localhost:4000/meals/clearAll");
    setIsLoading(false);
    setMeals([]);
    clearInput();
  };

  const clearInput = () => {
    setMealItem("");
    setMealQty(0);
    setMealCals(0);
    setProtein(0);
  };

  const editItem = (itemToEdit) => {
    const { _id, mealItem, mealQty, mealCals, mealProtein } = itemToEdit;
    setMealItem(mealItem);
    setMealQty(mealQty);
    setMealCals(mealCals);
    setProtein(mealProtein);
    setId(_id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setId(null);
    clearInput();
  };

  const saveEditMeal = async () => {
    const editItem = processMealInput();
    editItem.idToEdit = idToEdit;
    await postData("http://localhost:4000/edit/meal", editItem);
    await fetchItems(); 
    setId(null);
  };

  const saveMeal = async () => {
    const newMealItem = processMealInput();
    if (newMealItem) {
      await postData(
        "http://localhost:4000/meals",
        newMealItem
      );
      await fetchItems();
    }
  };

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
      clearInput();
      return newMealItem;
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <MealItemsContext.Provider
      value={{
        meals,
        fetchItems,
        isLoading,
        deleteItem,
        deleteMeals,
        clearInput,
        processMealInput,
        editItem,
        idToEdit,
        saveEditMeal,
        cancelEdit,
        saveMeal,
        mealItem,
        setMealItem,
        mealQty,
        setMealQty,
        mealProtein,
        setProtein,
        mealCals,
        setMealCals,
      }}
    >
      {children}
    </MealItemsContext.Provider>
  );
};
