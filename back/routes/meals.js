import express from "express";

import {
  addItem,
  getItems,
  clearItems,
  removeItem,
  editItem,
} from "../db/db.js";

import { MealItem } from "../db/models/MealItem.js";

export const mealRoutes = express();

/*
 * GET /meals
 *
 * @returns array of meal items
 */
mealRoutes.get("/meals", async (req, res) => {
  const meals = await getItems(MealItem);
  return res.send(meals);
});

/*
 * POST /meals (creates new meal)
 *
 * @payload:
 * {
 *  mealItem: string,
 *  mealQty: number,
 *  mealCals: number,
 *  mealProtein: number
 * }
 *
 * @returns success reply
 */
mealRoutes.post("/meals", async (req, res) => {
  await addItem(req.body, MealItem);
  res.send(JSON.stringify({ msg: "post successfull" }));
});

/*
 * POST /meals/clearAll (deletes all meals)
 *
 * @returns success reply
 */
mealRoutes.post("/meals/clearAll", async (req, res) => {
  await clearItems(MealItem);
  res.send(JSON.stringify({ msg: "delete all successfull" }));
});

/*
 * POST /meals/:id (deletes meal item based on id)
 *
 * @returns success reply
 */
mealRoutes.post("/meals/:id", async (req, res) => {
  const { id } = req.params;
  await removeItem(id, MealItem);
  res.send(JSON.stringify({ msg: `id ${id} deleted successfully` }));
});

/*
 * POST /meals/:id (edits meal item based on id)
 *
 * @payload:
 * {
 *  mealItem: string,
 *  mealQty: number,
 *  mealCals: number,
 *  mealProtein: number,
 *  idToEdti: string
 * }
 *
 * @returns success reply
 */
mealRoutes.post("/edit/meal", async (req, res) => {
  await editItem(req.body, MealItem);
  const { idToEdit: id } = req.body;
  res.send(JSON.stringify({ msg: `id ${id} edited successfully` }));
});
